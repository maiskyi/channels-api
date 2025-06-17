import { Injectable } from '@nestjs/common';

import { TelegramUserService } from '../telegram-user';

@Injectable()
export class DatabaseService {
  public constructor(public telegramUser: TelegramUserService) {}
}
