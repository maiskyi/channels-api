import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { GetSearchChannelsResponse } from './getSearchChannels.dto';

@ApiTags('Search')
@Controller('search')
export class GetSearchChannelsController {
  @Get('channels')
  @ApiOperation({
    operationId: 'getSearchChannels',
  })
  @ApiOkResponse({
    type: GetSearchChannelsResponse,
  })
  public async getSearchChannels(): Promise<GetSearchChannelsResponse> {
    return { data: [], total: 0 };
  }
}
