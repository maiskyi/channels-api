import { Injectable, Logger } from '@nestjs/common';

import { PrismaService } from '../prisma';

import {
  GetByTelegramUsernameParams,
  CreateParams,
} from './telegram-channel.types';

@Injectable()
export class TelegramChannelService {
  private logger = new Logger(TelegramChannelService.name, {
    timestamp: true,
  });

  public constructor(private prisma: PrismaService) {}

  public async getByTelegramUsername({
    telegramUsername,
  }: GetByTelegramUsernameParams) {
    try {
      const data = await this.prisma.telegramChannel.findFirst({
        where: {
          telegramUsername,
        },
      });

      return { data };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async create(input: CreateParams) {
    try {
      const data = await this.prisma.telegramChannel.create({
        data: input,
      });

      return { data };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
