import { Injectable } from '@nestjs/common';

import { UserService } from '../user';
import { ChannelService } from '../channel';
import { SubscriptionService } from '../subscription';

@Injectable()
export class DatabaseService {
  public constructor(
    public user: UserService,
    public channel: ChannelService,
    public subscription: SubscriptionService,
  ) {}
}
