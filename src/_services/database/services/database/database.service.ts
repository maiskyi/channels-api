import { Injectable } from '@nestjs/common';

import { TelegramUserService } from '../telegram-user';
import { TelegramChannelService } from '../telegram-channel';

@Injectable()
export class DatabaseService {
  public constructor(
    public telegramUser: TelegramUserService,
    public telegramChannel: TelegramChannelService,
  ) {}
}
