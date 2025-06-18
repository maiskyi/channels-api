import { Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Channels')
@Controller('channels')
export class SubscribeToChannelController {
  public constructor() {}

  @Post(':username/subscribe')
  public subscribeToChannel(@Param('username') username: string) {
    return { username };
  }
}
