import { PaginatedResponse } from '@common/dto';
import { ApiProperty } from '@nestjs/swagger';

export class SearchChannelsItem {}

export class GetSearchChannelsResponse extends PaginatedResponse<SearchChannelsItem> {
  @ApiProperty({
    type: SearchChannelsItem,
    isArray: true,
  })
  public readonly data: SearchChannelsItem[];
}
