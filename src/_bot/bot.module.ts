import { Module } from '@nestjs/common';

import { StartUpdate } from './updates/start';

@Module({
  providers: [StartUpdate],
})
export class BotModule {}
