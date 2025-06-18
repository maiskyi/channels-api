import { ApiProperty } from '@nestjs/swagger';

export class BotCommand {
  @ApiProperty({
    type: String,
  })
  public readonly command: string;

  @ApiProperty({
    type: String,
  })
  public readonly description: string;
}

export class SetMyCommandsRequest {
  @ApiProperty({
    type: BotCommand,
    isArray: true,
  })
  public readonly commands: BotCommand[];

  @ApiProperty({
    required: false,
  })
  public readonly language_code: string;
}
