import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { parse } from '@telegram-apps/init-data-node';

export type UserType = ReturnType<typeof parse>['user'];

export const User = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): UserType => {
    const request = ctx.switchToHttp().getRequest<Request>();

    return request.user;
  },
);
