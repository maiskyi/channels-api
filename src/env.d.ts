import { parse } from '@telegram-apps/init-data-node';

declare module 'express' {
  interface Request {
    user?: ReturnType<typeof parse>['user'];
  }
}

declare namespace NodeJS {
  interface ProcessEnv {
    TG_APP_API_ID: string;
    TG_APP_API_HASH: string;
    TG_BOT_API_TOKEN: string;
    TG_BOT_NAME: string;
    TG_BOT_WEB_APP_URL: string;
  }
}
