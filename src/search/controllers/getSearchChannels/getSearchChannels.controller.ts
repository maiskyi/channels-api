import { Controller, Get, Logger, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { TgApiClientService } from '@services/tg-api';

import {
  SearchChannelsItem,
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
    operationId: 'getSearchChannels',
  })
  @ApiOkResponse({
    type: GetSearchChannelsResponse,
  })
  public async getSearchChannels(
    @Query() { take, query }: GetSearchChannelsRequest,
  ): Promise<GetSearchChannelsResponse> {
    try {
      const channels = await this.tgApi.channels.search({ take, query });

      const data: SearchChannelsItem[] = channels.reduce((res, item) => {
        if (item.className === 'Channel') {
          return [
            ...res,
            {
              id: item.id,
              title: item.title,
            },
          ];
        }
        return res;
      }, []);

      return { data, total: channels.length };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
