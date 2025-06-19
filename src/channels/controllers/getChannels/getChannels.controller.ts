import {
  BadRequestException,
  Controller,
  Get,
  Logger,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard, User, UserType } from '@services/tg-app';
import { TgApiClientService } from '@services/tg-api';
import { DatabaseService, PrismaService } from '@services/database';
import { ChannelItem } from '@common/dto';

import { GetChannelsRequest, GetChannelsResponse } from './getChannels.dto';

@ApiTags('Channels')
@Controller('channels')
export class GetChannelsController {
  private logger = new Logger(GetChannelsController.name, {
    timestamp: true,
  });

  public constructor(
    private tsApi: TgApiClientService,
    private db: DatabaseService,
    private prisma: PrismaService,
  ) {}

  @Get()
  @ApiOperation({
    operationId: 'getChannels',
  })
  @UseGuards(AuthGuard)
  @ApiOkResponse({
    type: GetChannelsResponse,
  })
  public async getChannels(
    @Query() { take = 25, skip = 0 }: GetChannelsRequest,
    @User() user: UserType,
  ): Promise<GetChannelsResponse> {
    try {
      if (!user?.id) throw new BadRequestException('User is not defined');

      const { data: tgUser } = await this.db.user.getByTid({
        tid: user.id,
      });

      if (!tgUser) throw new BadRequestException('User not found');

      const subscriptionsRequest = this.prisma.subscription.findMany({
        skip,
        take,
        where: {
          userId: tgUser.id,
        },
        select: {
          channel: true,
        },
      });

      const totalRequest = this.prisma.subscription.count({
        where: {
          userId: tgUser.id,
        },
      });

      const [subscriptions, total] = await Promise.all([
        subscriptionsRequest,
        totalRequest,
      ]);

      if (!subscriptions)
        throw new BadRequestException('Subscriptions not found');

      const username = subscriptions.reduce((res, { channel }) => {
        return channel?.username ? [...res, channel.username] : res;
      }, []);

      const { channels } = await this.tsApi.channels.findManyByUsername({
        username,
      });

      const data: ChannelItem[] = channels.map(({ channel, photo }) => ({
        photo,
        id: channel.id.valueOf(),
        userName: channel.username,
        title: channel.title,
      }));

      return { data, total };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
