import { Module } from '@nestjs/common';

import { GetChannelsController } from './controllers/getChannels';
import { GetChannelController } from './controllers/getChannel';
import { SubscribeToChannelController } from './controllers/subscribeToChannel';

@Module({
  controllers: [
    GetChannelsController,
    GetChannelController,
    SubscribeToChannelController,
  ],
})
export class ChannelsModule {}
