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

  private getOrCreateTelegramChannel({
    username,
  }: GetOrCreateTelegramChannelParams) {}

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

    const channelRequest = this.tsApi.channels.getByUsername({
      username,
    });

    const telegramUserRequest = this.db.telegramUser.getByTgId({
      telegramId: user?.id,
    });

    const [{ channel }, { data: telegramUser }] = await Promise.all([
      channelRequest,
      telegramUserRequest,
    ]);
    console.log(channel);
    return { username };
  }
}
