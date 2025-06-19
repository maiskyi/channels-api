import { DynamicModule, Module } from '@nestjs/common';

import { PrismaService } from './services/prisma';
import { DatabaseService } from './services/database';
import { TelegramUserService } from './services/telegram-user';
import { TelegramChannelService } from './services/telegram-channel';

@Module({
  providers: [
    PrismaService,
    DatabaseService,
    TelegramUserService,
    TelegramChannelService,
  ],
  exports: [DatabaseService],
})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    return {
      module: DatabaseModule,
      global: true,
    };
  }
}
