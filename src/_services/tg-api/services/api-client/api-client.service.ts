import { Injectable } from '@nestjs/common';

import { TgChannelsService } from '../channels';

@Injectable()
export class TgApiClientService {
  public constructor(public channels: TgChannelsService) {}
}
