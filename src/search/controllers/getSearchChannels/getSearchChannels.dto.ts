import { ChannelItem, PaginatedRequest, PaginatedResponse } from '@common/dto';
import { ApiProperty } from '@nestjs/swagger';

export class GetSearchChannelsRequest extends PaginatedRequest {
  @ApiProperty({
    type: String,
  })
  public readonly query: string;
}

export class GetSearchChannelsResponse extends PaginatedResponse<ChannelItem> {
  @ApiProperty({
    type: ChannelItem,
    isArray: true,
  })
  public readonly data: ChannelItem[];
}
