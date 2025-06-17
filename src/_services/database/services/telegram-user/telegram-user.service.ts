import { Injectable, Logger } from '@nestjs/common';

import { PrismaService } from '../prisma';

import { GetByTgIdParams, CreateParams } from './telegram-user.types';

@Injectable()
export class TelegramUserService {
  private logger = new Logger(TelegramUserService.name, {
    timestamp: true,
  });

  public constructor(private prisma: PrismaService) {}

  public async getByTgId({ telegramId }: GetByTgIdParams) {
    try {
      const data = await this.prisma.telegramUser.findFirst({
        where: {
          telegramId,
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
      const data = await this.prisma.telegramUser.create({
        data: input,
      });

      return { data };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
