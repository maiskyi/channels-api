import { Injectable, OnModuleInit } from '@nestjs/common';
import { TgBotApiService } from '@services/tg-bot';

@Injectable()
export class BotInitService implements OnModuleInit {
  public constructor(private api: TgBotApiService) {}
  public async onModuleInit() {
    const commandsRequest = this.api.setMyCommands({
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
