import { Controller, Get, Logger, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TgApiClientService } from '@services/tg-api';
import { ChannelItem } from '@common/dto';

import {
  GetSearchChannelsResponse,
  GetSearchChannelsRequest,
} from './getSearchChannels.dto';

@ApiTags('Search')
@Controller('search')
export class GetSearchChannelsController {
  private logger = new Logger(GetSearchChannelsController.name, {
    timestamp: true,
  });

  public constructor(private tgApi: TgApiClientService) {}

  @Get('channels')
  @ApiOperation({
    operationId: 'channelsSearch',
  })
  @ApiOkResponse({
    type: GetSearchChannelsResponse,
  })
  public async getSearchChannels(
    @Query() { take, query }: GetSearchChannelsRequest,
  ): Promise<GetSearchChannelsResponse> {
    try {
      const { channels } = await this.tgApi.channels.search({ take, query });

      const data: ChannelItem[] = channels.reduce((res, { channel, photo }) => {
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
      }, []);

      return { data, total: data.length };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
