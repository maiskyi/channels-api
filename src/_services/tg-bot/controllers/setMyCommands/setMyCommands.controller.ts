import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

import { SetMyCommandsRequest } from './setMyCommands.dto';

@ApiTags('Bot')
@Controller('setMyCommands')
export class SetMyCommandsController {
  @Post()
  @ApiOperation({
    operationId: 'setMyCommands',
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public async setMyCommands(@Body() request: SetMyCommandsRequest) {}
}
