import { Logger } from '@nestjs/common';
import { Update, Start, Ctx, Context } from '@services/tg-bot';
import { I18nService } from '@core/i18n';
import { DatabaseService } from '@services/database';
import { User } from 'telegraf/typings/core/types/typegram';

@Update()
export class StartUpdate {
  private logger = new Logger(StartUpdate.name, {
    timestamp: true,
  });

  public constructor(
    private i18n: I18nService,
    private db: DatabaseService,
  ) {}

  private async getOrCreateTelegramUser(from: User | undefined) {
    if (!from) return null;

    const { data: user } = await this.db.telegramUser.getByTgId({
      tgId: `${from?.id}`,
    });

    if (!user) {
      const { data: user } = await this.db.telegramUser.create({
        telegramId: `${from.id}`,
        firstName: from.first_name,
        lastName: from.last_name,
        language: from.language_code,
      });

      return user;
    }

    return user;
  }

  @Start()
  public async start(@Ctx() ctx: Context) {
    try {
      const user = await this.getOrCreateTelegramUser(ctx.from);
      console.log(user);

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
