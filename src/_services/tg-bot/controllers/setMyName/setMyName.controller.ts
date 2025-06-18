import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { SetMyNameRequest } from './setMyName.dto';

@ApiTags('Bot')
@Controller('setMyName')
export class SetMyNameController {
  @Post()
  @ApiOperation({
    operationId: 'setMyName',
  })
  @ApiOkResponse({
    type: Boolean,
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public setMyName(@Body() req: SetMyNameRequest) {}
}
