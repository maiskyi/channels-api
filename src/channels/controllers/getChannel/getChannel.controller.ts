import { Controller, Get, Logger, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TgApiClientService } from '@services/tg-api';

import { GetChannelResponse } from './getChannel.dto';

@ApiTags('Channels')
@Controller('channels')
export class GetChannelController {
  private logger = new Logger(GetChannelController.name, {
    timestamp: true,
  });

  public constructor(private tgApi: TgApiClientService) {}

  @Get(':username')
  @ApiOperation({
    operationId: 'getChannel',
  })
  public async getChannel(
    @Param('username') username: string,
  ): Promise<GetChannelResponse> {
    try {
      const { channel, full, photo } = await this.tgApi.channels.getByUsername({
        username,
      });

      const title = channel.className === 'Channel' ? channel.title : null;

      return {
        photo,
        title,
        about: full.fullChat.about,
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
