import { Injectable } from '@nestjs/common';

import { UserService } from '../user';
import { ChannelService } from '../channel';

@Injectable()
export class DatabaseService {
  public constructor(
    public user: UserService,
    public channel: ChannelService,
  ) {}
}
