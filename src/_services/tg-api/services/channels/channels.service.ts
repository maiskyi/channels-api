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

      const requests = chats.map(async (item) => {
        if (item.className === 'Channel' && item.photo) {
          const buffer = await this.client.downloadProfilePhoto(item);

          return buffer
            ? `data:image/jpeg;base64,${buffer.toString('base64')}`
            : null;
        }

        return Promise.resolve(null);
      });

      const photos = await Promise.all(requests);

      const channels = Array.from({ length: chats.length }).map((_, index) => ({
        channel: chats[index],
        photo: photos[index],
      }));

      return { channels };
    } catch (error) {
      this.logger.error({ query, take }, error);
      throw error;
    }
  }
}
