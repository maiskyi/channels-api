import { Module } from '@nestjs/common';

import { GetChannelsController } from './controllers/getChannels';

@Module({
  controllers: [GetChannelsController],
})
export class ChannelsModule {}
