import { ApiProperty } from '@nestjs/swagger';

export class ChannelItem {
  @ApiProperty({
    type: Number,
  })
  public readonly id: number;

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
