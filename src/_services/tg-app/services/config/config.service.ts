import { Injectable } from '@nestjs/common';

import { ConfigServiceParams } from './config.types';

@Injectable()
export class ConfigService {
  public constructor(private config: ConfigServiceParams) {}

  public get token() {
    return this.config.token;
  }
}
