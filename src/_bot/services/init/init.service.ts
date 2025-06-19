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
      return;
      const commandsRequest = this.api.setMyCommands({
        commands: [
          {
            command: 'help',
            description: 'Show help and available commands',
          },
        ],
        language_code: 'en',
      });

      const nameRequest = this.api.setMyName({
        name: this.config.name,
      });

      const buttonRequest = this.api.setChatMenuButton({
        menu_button: {
          text: 'Open',
          type: 'web_app',
          web_app: {
            url: this.config.webAppUrl,
          },
        },
      });
      await Promise.all([commandsRequest, nameRequest, buttonRequest]);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
