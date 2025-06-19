import { ApiProperty } from '@nestjs/swagger';

export class SetMyNameRequest {
  @ApiProperty({
    type: String,
    required: false,
  })
  public readonly name?: string;

  @ApiProperty({
    type: String,
    required: false,
  })
  public readonly language_code?: string;
}
