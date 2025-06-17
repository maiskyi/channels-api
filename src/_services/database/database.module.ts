import { DynamicModule, Module } from '@nestjs/common';

import { PrismaService } from './services/prisma';
import { DatabaseService } from './services/database';
import { TelegramUserService } from './services/telegram-user';

@Module({
  providers: [PrismaService, DatabaseService, TelegramUserService],
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
