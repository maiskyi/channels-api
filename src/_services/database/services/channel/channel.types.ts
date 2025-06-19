import { PrismaService } from '../prisma';

export interface GetByUsernameParams {
  username: string;
}

export interface CreateParams {
  tid: number;
  username: string;
  title: string;
}

export type FindOneParams = Parameters<
  InstanceType<typeof PrismaService>['channel']['findFirst']
>['0'];

export interface DeleteParams {
  id: string;
}
