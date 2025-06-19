import { DynamicModule, Module } from '@nestjs/common';

import { PrismaService } from './services/prisma';
import { DatabaseService } from './services/database';
import { UserService } from './services/user';
import { ChannelService } from './services/channel';

@Module({
  providers: [PrismaService, DatabaseService, UserService, ChannelService],
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
