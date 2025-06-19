import { DynamicModule, Module } from '@nestjs/common';

import { PrismaService } from './services/prisma';
import { DatabaseService } from './services/database';
import { UserService } from './services/user';
import { ChannelService } from './services/channel';
import { SubscriptionService } from './services/subscription';

@Module({
  providers: [
    PrismaService,
    DatabaseService,
    UserService,
    ChannelService,
    SubscriptionService,
  ],
  exports: [DatabaseService, PrismaService],
})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    return {
      module: DatabaseModule,
      global: true,
    };
  }
}
