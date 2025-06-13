import { Logger } from '@nestjs/common';
import { Update, Start, Ctx, Context } from '@services/tg-bot';

@Update()
export class StartUpdate {
  private logger = new Logger(StartUpdate.name, {
    timestamp: true,
  });

  @Start()
  public async start(@Ctx() ctx: Context) {
    this.logger.log(ctx.from);
    try {
      await ctx.reply('123', {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'Subscribe to a channel',
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
