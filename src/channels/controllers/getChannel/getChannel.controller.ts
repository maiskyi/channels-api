import {
  BadRequestException,
  Controller,
  Get,
  Logger,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TgApiClientService } from '@services/tg-api';
import { ChannelItem } from '@common/dto';
import { AuthGuard, User, UserType } from '@services/tg-app';
import { DatabaseService } from '@services/database';

import { CheckIfSubscribedParams } from './getChannel.types';
import { GetChannelResponse } from './getChannel.dto';

@ApiTags('Channels')
@Controller('channels')
export class GetChannelController {
  private logger = new Logger(GetChannelController.name, {
    timestamp: true,
  });

  public constructor(
    private tgApi: TgApiClientService,
    private db: DatabaseService,
  ) {}

  private async checkIfSubscribed({
    channelId,
    userId,
  }: CheckIfSubscribedParams) {
    if (!channelId || !userId) return false;

    const { data: subscription } = await this.db.subscription.findOne({
      where: {
        channelId,
        userId,
      },
    });

    return !!subscription;
  }

  @Get(':username')
  @UseGuards(AuthGuard)
  @ApiOperation({
    operationId: 'getChannel',
  })
  @ApiOkResponse({
    type: GetChannelResponse,
  })
  public async getChannel(
    @Param('username') username: string,
    @User() user: UserType,
  ): Promise<GetChannelResponse> {
    try {
      if (!user?.id) throw new BadRequestException('User is not defined');

      const dbUserRequest = this.db.user.getByTid({
        tid: user?.id,
      });

      const dbChannelRequest = this.db.channel.getByUsername({
        username,
      });

      const channelRequest = this.tgApi.channels.getByUsername({
        username,
      });

      const recommendationsRequest = this.tgApi.channels.getRecommendations({
        username,
      });

      const [
        { channel, full, photo },
        { channels },
        { data: dbUser },
        { data: dbChannel },
      ] = await Promise.all([
        channelRequest,
        recommendationsRequest,
        dbUserRequest,
        dbChannelRequest,
      ]);

      const isSubscribed = await this.checkIfSubscribed({
        userId: dbUser?.id,
        channelId: dbChannel?.id,
      });

      console.log(isSubscribed);

      const title = channel.className === 'Channel' ? channel.title : null;

      const recommendations: ChannelItem[] = channels
        .reduce((res, { channel, photo }) => {
          if (channel.className === 'Channel') {
            return [
              ...res,
              {
                photo,
                id: channel.id.valueOf(),
                title: channel.title,
                userName: channel.username,
              },
            ];
          }
          return res;
        }, [])
        .filter(({ userName }) => !!userName);

      return {
        photo,
        title,
        isSubscribed,
        username,
        recommendations,
        about: full.fullChat.about,
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
