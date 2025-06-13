import { ApiProperty } from '@nestjs/swagger';

export class GetChannelResponse {
  @ApiProperty({
    type: String,
    nullable: true,
  })
  public readonly title: string | null;

  @ApiProperty({
    type: String,
  })
  public readonly about: string;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  public readonly photo: string | null;
}
