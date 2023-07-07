import { Markup, Telegraf } from "telegraf";
import { Command } from "./command.class";
import { IBotContext } from "../context/context.interface";

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {
    this.bot.start((ctx) => {
      console.log(ctx.session);
      ctx.reply(
        "Вы сотрудник ООО ЦЭК?",
        Markup.inlineKeyboard([
          Markup.button.callback("Да", "answer_yes"),
          Markup.button.callback("Нет", "answer_no"),
        ])
      );
    });

    this.bot.action("answer_yes", (ctx) => {
      ctx.session.answerYes = true;
      ctx.editMessageText("Привет коллега!");
    });

    this.bot.action("answer_no", (ctx) => {
      ctx.session.answerYes = false;
      ctx.editMessageText("По вопросам трудоустройства свяжитесь с @manager");
    });
  }
}
