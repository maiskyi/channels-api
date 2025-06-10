import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './search';
import { TgApiModule } from '@services/tg-api';

@Module({
  imports: [ConfigModule.forRoot(), TgApiModule, SearchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
