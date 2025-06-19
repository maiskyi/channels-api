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

  private async getOrCreateTelegramUser(from: User) {
    const { data: user } = await this.db.user.getByTid({
      tid: from?.id,
    });

    if (!user) {
      const { data: user } = await this.db.user.create({
        tid: from.id,
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
      if (!ctx.from) return;

      const user = await this.getOrCreateTelegramUser(ctx.from);

      if (!user) return;

      await ctx.reply(this.i18n.t('bot.start.welcome'), {
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
              {
                text: this.i18n.t('actions.myChannels', {
                  lang: ctx.from?.language_code,
                }),
                url: 'https://google.com',
              },
            ],
          ],
        },
      });
    } catch (error) {
      this.logger.error(error);
    }
  }
}
