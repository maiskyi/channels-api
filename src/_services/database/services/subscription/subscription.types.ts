import { PrismaService } from '../prisma';

export interface CreateParams {
  channelId: string;
  userId: string;
}

export type FindOneParams = Parameters<
  InstanceType<typeof PrismaService>['subscription']['findFirst']
>['0'];
