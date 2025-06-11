import { Injectable, Logger } from '@nestjs/common';
import { Api } from 'telegram';

import { TgClientService } from '../client';

import { SearchParams } from './channels.types';

@Injectable()
export class TgChannelsService {
  private logger = new Logger(TgChannelsService.name, {
    timestamp: true,
  });

  public constructor(private client: TgClientService) {}

  public async search({ query, take }: SearchParams) {
    try {
      const command = new Api.contacts.Search({
        q: query,
        limit: take,
      });

      const { chats } = await this.client.invoke(command);

      return chats;
    } catch (error) {
      this.logger.error({ query, take }, error);
      throw error;
    }
  }
}
