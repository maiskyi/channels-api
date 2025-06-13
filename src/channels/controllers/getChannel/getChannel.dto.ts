import { ApiProperty } from '@nestjs/swagger';
import { ChannelItem } from '@common/dto';

export class GetChannelResponse {
  @ApiProperty({
    type: String,
    nullable: true,
  })
  public readonly title: string | null;

  @ApiProperty({
    type: String,
  })
  public readonly username: string;

  @ApiProperty({
    type: String,
  })
  public readonly about: string;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  public readonly photo: string | null;

  @ApiProperty({
    type: Boolean,
  })
  public readonly isSubscribed: boolean;

  @ApiProperty({
    type: ChannelItem,
    isArray: true,
  })
  public readonly recommendations: ChannelItem[];
}
