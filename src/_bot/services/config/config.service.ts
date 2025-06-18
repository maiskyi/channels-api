import { Injectable } from '@nestjs/common';

import { BotConfigServiceConfig } from './config.types';

@Injectable()
export class BotConfigService {
  public constructor(private config: BotConfigServiceConfig) {}

  public get name() {
    return this.config.name;
  }

  public get webAppUrl() {
    return this.config.webAppUrl;
  }
}
