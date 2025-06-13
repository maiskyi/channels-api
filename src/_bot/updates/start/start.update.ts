import { Update, Start, Ctx, Context } from '@services/tg-bot';

@Update()
export class StartUpdate {
  @Start()
  public async start(@Ctx() ctx: Context) {
    await ctx.reply('123');
  }
}
