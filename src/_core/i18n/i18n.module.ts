import { DynamicModule, Module } from '@nestjs/common';
import { HeaderResolver, I18nModule } from 'nestjs-i18n';

import { I18NModuleConfig } from './i18n.types';

@Module({})
export class I18NModule {
  static forRoot({ path }: I18NModuleConfig): DynamicModule {
    return {
      module: I18NModule,
      global: true,
      providers: [],
      imports: [
        I18nModule.forRoot({
          fallbackLanguage: 'en',
          loaderOptions: {
            path,
          },
          resolvers: [new HeaderResolver(['x-lang'])],
        }),
      ],
    };
  }
}
