import {
  BadRequestException,
  Controller,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard, User, UserType } from '@services/tg-app';
import { TgApiClientService } from '@services/tg-api';
import { DatabaseService } from '@services/database';

import { GetOrCreateTelegramChannelParams } from './subscribeToChannel.types';

@ApiTags('Channels')
@Controller('channels')
export class SubscribeToChannelController {
  public constructor(
    private tsApi: TgApiClientService,
    private db: DatabaseService,
  ) {}

  private async getOrCreateTelegramChannel({
    username,
  }: GetOrCreateTelegramChannelParams) {
    const { data } = await this.db.channel.getByUsername({
      username,
    });

    if (data) return { data };

    const { channel } = await this.tsApi.channels.getByUsername({
      username,
    });

    if (channel.className === 'Channel') {
      const data = this.db.channel.create({
        username,
        tid: channel.id.valueOf(),
        title: channel.title,
      });

      return data;
    }

    throw new Error();
  }

  @Post(':username/subscribe')
  @UseGuards(AuthGuard)
  @ApiOperation({
    operationId: 'subscribeToChannel',
  })
  public async subscribeToChannel(
    @Param('username') username: string,
    @User() user: UserType,
  ) {
    if (!user?.id) throw new BadRequestException();

    const tgChannelRequest = this.getOrCreateTelegramChannel({
      username,
    });

    const tgUserRequest = this.db.user.getByTid({
      tid: user?.id,
    });

    const [{ data: tgChannel }, { data: tgUser }] = await Promise.all([
      tgChannelRequest,
      tgUserRequest,
    ]);

    console.log(tgChannel, tgUser);

    return { username };
  }
}
