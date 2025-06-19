import { Injectable } from '@nestjs/common';

import { HttpClientService } from '../http-client';
import { Bot } from '../../__generated__/Bot';

@Injectable()
export class TgBotApiService extends Bot {
  public constructor(client: HttpClientService) {
    super(client);
  }
}
