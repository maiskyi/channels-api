import { Logger } from '@nestjs/common';
import { Update, Start, Ctx, Context } from '@services/tg-bot';
import { I18nService } from '@core/i18n';

@Update()
export class StartUpdate {
  private logger = new Logger(StartUpdate.name, {
    timestamp: true,
  });

  public constructor(private i18n: I18nService) {}

  @Start()
  public async start(@Ctx() ctx: Context) {
    try {
      await ctx.reply('123', {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: this.i18n.t('actions.subscribeToChannel', {
                  lang: ctx.from?.language_code,
                }),
                url: 'https://google.com',
              },
            ],
            [
              { text: '👍 Yes', callback_data: 'yes' },
              { text: '👎 No', callback_data: 'no' },
            ],
          ],
        },
      });
    } catch (error) {
      this.logger.error(error);
    }
  }
}
