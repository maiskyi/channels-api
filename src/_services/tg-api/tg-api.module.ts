import { DynamicModule, Module } from '@nestjs/common';
import { StoreSession } from 'telegram/sessions';
import input from 'input';

import { TgApiModuleConfig } from './tg-api.types';
import { TgClientService } from './services/client';
import { TgApiClientService } from './services/api-client';
import { TgChannelsService } from './services/channels';

@Module({
  providers: [TgApiClientService, TgChannelsService],
  exports: [TgApiClientService],
})
export class TgApiModule {
  static forRoot({ apiId, apiHash }: TgApiModuleConfig): DynamicModule {
    return {
      module: TgApiModule,
      global: true,
      providers: [
        {
          provide: TgClientService,
          useFactory: async () => {
            const session = new StoreSession('sessions');

            const client = new TgClientService(session, apiId, apiHash, {
              connectionRetries: 5,
            });

            await client.start({
              phoneNumber: async () =>
                await input.text('Enter your phone number: '),
              password: async () => await input.text('Enter your password: '),
              phoneCode: async () =>
                await input.text('Enter the code you received: '),
              onError: (err) => console.log(err),
            });

            client.session.save();

            return client;
          },
        },
      ],
    };
  }
}
