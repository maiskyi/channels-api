import { Injectable, Logger } from '@nestjs/common';

import { PrismaService } from '../prisma';

import {
  GetByUsernameParams,
  CreateParams,
  FindOneParams,
  DeleteParams,
} from './channel.types';

@Injectable()
export class ChannelService {
  private logger = new Logger(ChannelService.name, {
    timestamp: true,
  });

  public constructor(private prisma: PrismaService) {}

  public async findOne(params: FindOneParams) {
    try {
      const data = await this.prisma.channel.findFirst(params);

      return { data };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  public async getByUsername({ username }: GetByUsernameParams) {
    try {
      const data = await this.prisma.channel.findFirst({
        where: {
          username,
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
      const data = await this.prisma.channel.create({
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
      const data = await this.prisma.channel.delete({
        where,
      });

      return { data };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
