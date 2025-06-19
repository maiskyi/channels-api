import { Injectable } from '@nestjs/common';

import { HttpClient } from '../../__generated__/http-client';
import { TgBotModuleConfig } from '../../tg-bot.types';

@Injectable()
export class HttpClientService<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  public constructor({ token }: TgBotModuleConfig) {
    super({
      baseURL: `https://api.telegram.org/bot${token}`,
    });
  }
}
