import { Module } from '@nestjs/common';
import { GetSearchChannelsController } from './controllers/getSearchChannels';

@Module({
  controllers: [GetSearchChannelsController],
})
export class SearchModule {}
