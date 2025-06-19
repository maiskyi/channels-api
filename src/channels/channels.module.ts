import { Module } from '@nestjs/common';

import { GetChannelsController } from './controllers/getChannels';
import { GetChannelController } from './controllers/getChannel';
import { SubscribeToChannelController } from './controllers/subscribeToChannel';
import { UnsubscribeFromChannelController } from './controllers/unsubscribeFromChannel';

@Module({
  controllers: [
    GetChannelsController,
    GetChannelController,
    SubscribeToChannelController,
    UnsubscribeFromChannelController,
  ],
})
export class ChannelsModule {}
