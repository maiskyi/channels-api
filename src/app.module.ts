import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TgApiModule } from '@services/tg-api';
import { toNumber } from 'lodash';

import { SearchModule } from './search';
import { ChannelsModule } from './channels';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TgApiModule.forRoot({
      apiId: toNumber(process.env.TG_APP_API_ID),
      apiHash: process.env.TG_APP_API_HASH,
      botApiToken: process.env.TG_BOT_API_TOKEN,
    }),
    ChannelsModule,
    SearchModule,
  ],
})
export class AppModule {}
