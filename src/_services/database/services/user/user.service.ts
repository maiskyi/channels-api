import { Injectable, Logger } from '@nestjs/common';

import { PrismaService } from '../prisma';

import { GetByTidParams, CreateParams } from './user.types';

@Injectable()
export class UserService {
  private logger = new Logger(UserService.name, {
    timestamp: true,
  });

  public constructor(private prisma: PrismaService) {}

  public async getByTid({ tid }: GetByTidParams) {
    try {
      const data = await this.prisma.user.findFirst({
        where: {
          tid,
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
      const data = await this.prisma.user.create({
        data: input,
      });

      return { data };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
