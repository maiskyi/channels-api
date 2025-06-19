import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { SetMyCommandsRequest } from './setMyCommands.dto';

@ApiTags('Bot')
@Controller('setMyCommands')
export class SetMyCommandsController {
  @Post()
  @ApiOperation({
    operationId: 'setMyCommands',
  })
  @ApiOkResponse({
    type: Boolean,
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async setMyCommands(@Body() request: SetMyCommandsRequest) {}
}
