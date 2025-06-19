import { resolve } from 'path';
import { generateApi } from 'swagger-typescript-api';

generateApi({
  // name: 'revenue-cat-api.ts',
  output: resolve(process.cwd(), './src/_services/tg-bot/__generated__'),
  input: resolve(process.cwd(), './src/_services/tg-bot/tg-bot.json'),
  modular: true,
  cleanOutput: true,
  moduleNameFirstTag: true,
  extractRequestParams: true,
  extractRequestBody: true,
  extractResponseBody: true,
  extractResponseError: true,
  unwrapResponseData: true,
  httpClientType: 'axios',
  singleHttpClient: true,
});
