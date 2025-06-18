import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { TgBotApiService } from '@services/tg-bot';

import { BotConfigService } from '../config';

@Injectable()
export class BotInitService implements OnModuleInit {
  private logger = new Logger(BotInitService.name, {
    timestamp: true,
  });

  public constructor(
    private api: TgBotApiService,
    private config: BotConfigService,
  ) {}

  public async onModuleInit() {
    try {
      const commandsRequest = this.api.setMyCommands({
        commands: [
          {
            command: 'help',
            description: 'Show help and available commands',
          },
        ],
        language_code: 'en',
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const nameRequest = this.api.setMyName({
        name: this.config.name,
      });
      await Promise.all([commandsRequest, nameRequest]);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
