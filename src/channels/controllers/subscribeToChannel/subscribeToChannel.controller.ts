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
    telegramUsername,
  }: GetOrCreateTelegramChannelParams) {
    const { data } = await this.db.telegramChannel.getByTelegramUsername({
      telegramUsername,
    });

    if (data) return { data };

    const { channel } = await this.tsApi.channels.getByUsername({
      username: telegramUsername,
    });

    if (channel.className === 'Channel') {
      const data = this.db.telegramChannel.create({
        telegramUsername,
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
    @Param('username') telegramUsername: string,
    @User() user: UserType,
  ) {
    if (!user?.id) throw new BadRequestException();

    const tgChannelRequest = this.getOrCreateTelegramChannel({
      telegramUsername,
    });

    const tgUserRequest = this.db.telegramUser.getByTgId({
      telegramId: user?.id,
    });

    const [{ data: tgChannel }, { data: tgUser }] = await Promise.all([
      tgChannelRequest,
      tgUserRequest,
    ]);

    console.log(tgChannel, tgUser);

    return { telegramUsername };
  }
}
