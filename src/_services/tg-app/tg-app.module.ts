import { DynamicModule, Module } from '@nestjs/common';

import { ConfigService, ConfigServiceParams } from './services/config';

@Module({})
export class TgAppModule {
  static forRoot({ token }: ConfigServiceParams): DynamicModule {
    return {
      module: TgAppModule,
      global: true,
      providers: [
        {
          provide: ConfigService,
          useValue: new ConfigService({
            token,
          }),
        },
      ],
      exports: [ConfigService],
    };
  }
}
