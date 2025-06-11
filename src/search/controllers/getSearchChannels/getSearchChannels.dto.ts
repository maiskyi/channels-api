import { PaginatedRequest, PaginatedResponse } from '@common/dto';
import { ApiProperty } from '@nestjs/swagger';

export class SearchChannelsItem {
  @ApiProperty({
    type: String,
  })
  public readonly id: bigInt.BigInteger;

  @ApiProperty({
    type: String,
  })
  public readonly title: string;

  @ApiProperty({
    type: String,
    required: false,
  })
  public readonly userName?: string;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  public readonly photo: string | null;
}

export class GetSearchChannelsRequest extends PaginatedRequest {
  @ApiProperty({
    type: String,
  })
  public readonly query: string;
}

export class GetSearchChannelsResponse extends PaginatedResponse<SearchChannelsItem> {
  @ApiProperty({
    type: SearchChannelsItem,
    isArray: true,
  })
  public readonly data: SearchChannelsItem[];
}
