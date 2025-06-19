import {
  BadRequestException,
  Controller,
  Logger,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard, User, UserType } from '@services/tg-app';
import { TgApiClientService } from '@services/tg-api';
import { DatabaseService } from '@services/database';

import {
  GetOrCreateTelegramChannelParams,
  GetOrCreateSubscriptionParams,
} from './subscribeToChannel.types';

@ApiTags('Channels')
@Controller('channels')
export class SubscribeToChannelController {
  private logger = new Logger(SubscribeToChannelController.name, {
    timestamp: true,
  });

  public constructor(
    private tsApi: TgApiClientService,
    private db: DatabaseService,
  ) {}

  private async getOrCreateTelegramChannel({
    username,
  }: GetOrCreateTelegramChannelParams) {
    const { data } = await this.db.channel.getByUsername({
      username,
    });

    if (data) return { data };

    const { channel } = await this.tsApi.channels.getByUsername({
      username,
    });

    if (channel.className === 'Channel') {
      const data = this.db.channel.create({
        username,
        tid: channel.id.valueOf(),
        title: channel.title,
      });

      return data;
    }

    throw new Error();
  }

  private async getOrCreateSubscription({
    userId,
    channelId,
  }: GetOrCreateSubscriptionParams) {
    const { data: sub } = await this.db.subscription.findOne({
      where: {
        userId,
        channelId,
      },
    });

    if (sub) return { data: sub };

    const { data } = await this.db.subscription.create({
      userId,
      channelId,
    });

    return { data };
  }

  @Post(':username/subscribe')
  @UseGuards(AuthGuard)
  @ApiOperation({
    operationId: 'subscribeToChannel',
  })
  public async subscribeToChannel(
    @Param('username') username: string,
    @User() user: UserType,
  ) {
    try {
      if (!user?.id) throw new BadRequestException('Session does not exist');

      const channelRequest = this.getOrCreateTelegramChannel({
        username,
      });

      const userRequest = this.db.user.getByTid({
        tid: user?.id,
      });

      const [{ data: channel }, { data: tguser }] = await Promise.all([
        channelRequest,
        userRequest,
      ]);

      if (!tguser) throw new BadRequestException('User not found');

      const subscription = await this.getOrCreateSubscription({
        userId: tguser.id,
        channelId: channel.id,
      });

      console.log(subscription);

      return { username };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
