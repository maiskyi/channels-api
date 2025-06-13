import { DynamicModule, Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';

import { BOT_NAME } from './tg-bot.const';
import { TgBotModuleConfig } from './tg-bot.types';

@Module({})
export class TgBotModule {
  static forRoot({ token }: TgBotModuleConfig): DynamicModule {
    return {
      module: TgBotModule,
      global: true,
      providers: [],
      imports: [
        TelegrafModule.forRoot({
          token,
          botName: BOT_NAME,
        }),
      ],
    };
  }
}
