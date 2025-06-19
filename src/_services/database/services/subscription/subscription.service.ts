import { Injectable, Logger } from '@nestjs/common';

import { PrismaService } from '../prisma';

import {
  FindOneParams,
  CreateParams,
  DeleteParams,
  FindManyParams,
} from './subscription.types';

@Injectable()
export class SubscriptionService {
  private logger = new Logger(SubscriptionService.name, {
    timestamp: true,
  });

  public constructor(private prisma: PrismaService) {}

  public async findMany(params: FindManyParams) {
    try {
      const data = await this.prisma.subscription.findMany({
        ...params,
        select: {
          id: true,
          user: true,
          channel: true,
        },
      });

      return { data };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async findOne(params: FindOneParams) {
    try {
      const data = await this.prisma.subscription.findFirst(params);

      return { data };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async create(input: CreateParams) {
    try {
      const data = await this.prisma.subscription.create({
        data: input,
      });

      return { data };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async delete(where: DeleteParams) {
    try {
      const data = await this.prisma.subscription.delete({
        where,
      });

      return { data };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
