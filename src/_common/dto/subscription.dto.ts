import { ApiProperty } from '@nestjs/swagger';

export class Subscription {
  @ApiProperty({
    type: String,
  })
  public readonly id: string;

  @ApiProperty({
    type: String,
    nullable: true,
    format: 'date-time',
  })
  public readonly createdAt: Date | null;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  public readonly userId: string | null;

  @ApiProperty({
    type: String,
    nullable: true,
  })
  public readonly channelId: string | null;
}
