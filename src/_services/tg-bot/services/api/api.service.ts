import { Injectable } from '@nestjs/common';

import { HttpClientService } from '../http-client';
import { SetMyCommands } from '../../__generated__/SetMyCommands';

@Injectable()
export class CommandsService extends SetMyCommands {
  public constructor(client: HttpClientService) {
    super(client);
  }
}

@Injectable()
export class TgBotApiService {
  public constructor(public commands: CommandsService) {}
}
