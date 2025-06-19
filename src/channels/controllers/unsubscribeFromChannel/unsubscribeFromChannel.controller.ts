import { Subscription } from '@common/dto';
import {
  BadRequestException,
  Controller,
  Logger,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DatabaseService } from '@services/database';
import { AuthGuard, User, UserType } from '@services/tg-app';

@ApiTags('Channels')
@Controller('channels')
export class UnsubscribeFromChannelController {
  private logger = new Logger(UnsubscribeFromChannelController.name, {
    timestamp: true,
  });

  public constructor(private db: DatabaseService) {}

  @Post(':username/unsubscribe')
  @UseGuards(AuthGuard)
  @ApiOperation({
    operationId: 'unsubscribeFromChannel',
  })
  @ApiOkResponse({
    type: Subscription,
  })
  public async unsubscribeFromChannel(
    @Param('username') username: string,
    @User() user: UserType,
  ): Promise<Subscription> {
    try {
      if (!user?.id) throw new BadRequestException('User is not defined');

      const userRequest = this.db.user.getByTid({
        tid: user?.id,
      });

      const channelRequest = this.db.channel.getByUsername({
        username,
      });

      const [{ data: dbUser }, { data: dbChannel }] = await Promise.all([
        userRequest,
        channelRequest,
      ]);

      if (!dbUser) throw new BadRequestException('User not found');

      if (!dbChannel) throw new BadRequestException('Channel not found');

      const { data: subscription } = await this.db.subscription.findOne({
        where: {
          userId: dbUser.id,
          channelId: dbChannel.id,
        },
      });

      if (!subscription)
        throw new BadRequestException('Subscription not found');

      const { data: deleted } = await this.db.subscription.delete({
        id: subscription?.id,
      });

      const { data } = await this.db.subscription.findOne({
        where: {
          channelId: dbChannel.id,
        },
      });

      if (!data) {
        const { data } = await this.db.channel.delete({
          id: dbChannel.id,
        });

        this.logger.log('Channel deleted', data);
      }

      return deleted;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
