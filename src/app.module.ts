import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search';
import { TgApiModule } from '@services/tg-api';
import { toNumber } from 'lodash';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TgApiModule.forRoot({
      apiId: toNumber(process.env.TG_APP_API_ID),
      apiHash: process.env.TG_APP_API_HASH,
      botApiToken: process.env.TG_BOT_API_TOKEN,
    }),
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
