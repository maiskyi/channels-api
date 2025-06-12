import { ChannelItem, PaginatedRequest, PaginatedResponse } from '@common/dto';
import { ApiProperty } from '@nestjs/swagger';

export class GetChannelsRequest extends PaginatedRequest {}

export class GetChannelsResponse extends PaginatedResponse<ChannelItem> {
  @ApiProperty({
    type: ChannelItem,
    isArray: true,
  })
  public readonly data: ChannelItem[];
}
