import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import {
  isValid as isValidInitDataRaw,
  parse,
} from '@telegram-apps/init-data-node';

import { ConfigService } from '../../services/config';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private config: ConfigService) {}

  public canActivate(context: ExecutionContext): boolean {
    const ctx = context.switchToHttp();
    const req = ctx.getRequest<Request>();

    const initDataRaw = req.headers['x-init-data-raw'] as string;

    if (!initDataRaw) throw new UnauthorizedException();

    const isValid = isValidInitDataRaw(initDataRaw, this.config.token);

    if (!isValid) throw new UnauthorizedException();

    const { user } = parse(initDataRaw);

    if (!user) throw new UnauthorizedException();

    // @ts-expect-error x3 error
    req.user = user;

    return true;
  }
}
