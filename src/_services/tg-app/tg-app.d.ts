import { parse } from '@telegram-apps/init-data-node';

declare module 'express' {
  interface Request {
    user?: ReturnType<typeof parse>['user'];
  }
}
