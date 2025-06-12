import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, Min } from 'class-validator';
import { Transform } from 'class-transformer';

export class PaginatedRequest {
  @ApiProperty({
    name: 'take',
    type: Number,
    required: false,
  })
  @IsInt()
  @IsOptional()
  @Min(1)
  @Transform(({ value }) => typeof value === 'string' && parseInt(value, 10))
  public readonly take: number;

  @ApiProperty({
    name: 'skip',
    type: Number,
    required: false,
  })
  @IsInt()
  @IsOptional()
  @Min(1)
  @Transform(({ value }) => typeof value === 'string' && parseInt(value, 10))
  public readonly skip: number;
}
