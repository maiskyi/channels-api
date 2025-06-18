import { Injectable, OnModuleInit } from '@nestjs/common';

import { HttpClientService } from '../http-client';
import { Bot } from '../../__generated__/Bot';

@Injectable()
export class TgBotApiService extends Bot implements OnModuleInit {
  //   public constructor(public commands: CommandsService) {}
  public constructor(client: HttpClientService) {
    super(client);
  }

  public async onModuleInit() {
    const commandsRequest = this.setMyCommands({
      commands: [
        {
          command: 'help',
          description: 'Show help and available commands',
        },
      ],
    });
    await Promise.all([commandsRequest]);
  }
}
