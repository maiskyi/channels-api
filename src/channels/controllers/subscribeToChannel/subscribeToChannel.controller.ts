import { Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@services/tg-app';

@ApiTags('Channels')
@Controller('channels')
export class SubscribeToChannelController {
  public constructor() {}

  @Post(':username/subscribe')
  @UseGuards(AuthGuard)
  @ApiOperation({
    operationId: 'subscribeToChannel',
  })
  public subscribeToChannel(@Param('username') username: string) {
    return { username };
  }
}
