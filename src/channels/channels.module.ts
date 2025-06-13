import { Module } from '@nestjs/common';

import { GetChannelsController } from './controllers/getChannels';
import { GetChannelController } from './controllers/getChannel';

@Module({
  controllers: [GetChannelsController, GetChannelController],
})
export class ChannelsModule {}
