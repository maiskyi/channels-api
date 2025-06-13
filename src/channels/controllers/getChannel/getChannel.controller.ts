import { Controller, Get, Logger, Param } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TgApiClientService } from '@services/tg-api';
import { ChannelItem } from '@common/dto';

import { GetChannelResponse } from './getChannel.dto';

@ApiTags('Channels')
@Controller('channels')
export class GetChannelController {
  private logger = new Logger(GetChannelController.name, {
    timestamp: true,
  });

  public constructor(private tgApi: TgApiClientService) {}

  @Get(':username')
  @ApiOperation({
    operationId: 'getChannel',
  })
  @ApiOkResponse({
    type: GetChannelResponse,
  })
  public async getChannel(
    @Param('username') username: string,
  ): Promise<GetChannelResponse> {
    try {
      const channelRequest = this.tgApi.channels.getByUsername({
        username,
      });

      const recommendationsRequest = this.tgApi.channels.getRecommendations({
        username,
      });

      const [{ channel, full, photo }, { channels }] = await Promise.all([
        channelRequest,
        recommendationsRequest,
      ]);

      console.log(channels);

      const title = channel.className === 'Channel' ? channel.title : null;

      const recommendations: ChannelItem[] = channels.reduce(
        (res, { channel, photo }) => {
          if (channel.className === 'Channel') {
            return [
              ...res,
              {
                photo,
                id: channel.id,
                title: channel.title,
                userName: channel.username,
              },
            ];
          }
          return res;
        },
        [],
      );

      return {
        photo,
        title,
        isSubscribed: true,
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
