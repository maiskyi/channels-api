import { DynamicModule, Module } from '@nestjs/common';

import { StartUpdate } from './updates/start';
import { BotConfigService, BotConfigServiceConfig } from './services/config';
import { BotInitService } from './services/init';

@Module({
  providers: [StartUpdate, BotInitService],
})
export class BotModule {
  static forRoot(config: BotConfigServiceConfig): DynamicModule {
    return {
      module: BotModule,
      global: true,
      providers: [
        {
          provide: BotConfigService,
          useValue: new BotConfigService(config),
        },
      ],
    };
  }
}
