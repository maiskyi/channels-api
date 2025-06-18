import { DynamicModule, Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';

import { BOT_NAME } from './tg-bot.const';
import { TgBotModuleConfig } from './tg-bot.types';
import { HttpClientService } from './services/http-client';
import { TgBotApiService } from './services/api';
import { SetMyCommandsController } from './controllers/setMyCommands';
import { SetMyNameController } from './controllers/setMyName';
import { SetChatMenuButtonController } from './controllers/setChatMenuButton';

@Module({
  providers: [TgBotApiService],
  exports: [TgBotApiService],
  controllers: [
    SetMyCommandsController,
    SetMyNameController,
    SetChatMenuButtonController,
  ],
})
export class TgBotModule {
  static forRoot({ token }: TgBotModuleConfig): DynamicModule {
    return {
      module: TgBotModule,
      global: true,
      providers: [
        {
          provide: HttpClientService,
          useValue: new HttpClientService({
            token,
          }),
        },
      ],
      imports: [
        TelegrafModule.forRoot({
          token,
          botName: BOT_NAME,
        }),
      ],
    };
  }
}
