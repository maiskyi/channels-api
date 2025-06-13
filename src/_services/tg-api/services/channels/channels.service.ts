import { Injectable, Logger } from '@nestjs/common';
import { Api } from 'telegram';

import { TgClientService } from '../client';

import {
  SearchParams,
  GetByUsernameParams,
  GetProfilePhotoParams,
  GetRecommendationsParams,
} from './channels.types';

@Injectable()
export class TgChannelsService {
  private logger = new Logger(TgChannelsService.name, {
    timestamp: true,
  });

  public constructor(private client: TgClientService) {}

  private async getProfilePhoto({ entity }: GetProfilePhotoParams) {
    try {
      const buffer = await this.client.downloadProfilePhoto(entity);
      const base64 = buffer?.toString('base64');
      return base64 ? `data:image/jpeg;base64,${base64}` : null;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async getRecommendations({ username }: GetRecommendationsParams) {
    try {
      const channel = await this.client.getEntity(username);

      const command = new Api.channels.GetChannelRecommendations({
        channel,
      });

      const { chats } = await this.client.invoke(command);

      const requests = chats.map(async (item) => {
        if (item.className === 'Channel' && item.photo) {
          return this.getProfilePhoto({ entity: item });
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
      this.logger.error(error);
      throw error;
    }
  }

  public async getByUsername({ username }: GetByUsernameParams) {
    try {
      const channel = await this.client.getEntity(username);

      const command = new Api.channels.GetFullChannel({
        channel,
      });

      const full = await this.client.invoke(command);

      const photo = await this.getProfilePhoto({ entity: channel });

      return { channel, full, photo };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async search({ query, take }: SearchParams) {
    try {
      const command = new Api.contacts.Search({
        q: query,
        limit: take,
      });

      const { chats } = await this.client.invoke(command);

      const requests = chats.map(async (item) => {
        if (item.className === 'Channel' && item.photo) {
          return this.getProfilePhoto({ entity: item });
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
