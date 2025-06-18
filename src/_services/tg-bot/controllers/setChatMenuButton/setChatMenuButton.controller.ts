import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { SetChatMenuButtonRequest } from './setChatMenuButton.dto';

@ApiTags('Bot')
@Controller('setChatMenuButton')
export class SetChatMenuButtonController {
  @Post()
  @ApiOperation({
    operationId: 'setChatMenuButton',
  })
  @ApiOkResponse({
    type: Boolean,
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public setChatMenuButton(@Body() req: SetChatMenuButtonRequest) {}
}
