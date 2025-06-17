import { resolve } from 'path';

import { toNumber } from 'lodash';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TgApiModule } from '@services/tg-api';
import { TgBotModule } from '@services/tg-bot';
import { I18NModule } from '@core/i18n';

import { BotModule } from './_bot';
import { SearchModule } from './search';
import { ChannelsModule } from './channels';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // Services
    TgApiModule.forRoot({
      apiId: toNumber(process.env.TG_APP_API_ID),
      apiHash: process.env.TG_APP_API_HASH,
      botApiToken: process.env.TG_BOT_API_TOKEN,
    }),
    TgBotModule.forRoot({
      token: process.env.TG_BOT_API_TOKEN,
    }),
    I18NModule.forRoot({
      path: resolve(__dirname, './_i18n/resources'),
    }),
    //
    BotModule,
    // Features
    ChannelsModule,
    SearchModule,
  ],
})
export class AppModule {}
