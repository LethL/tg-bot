import { Context } from "telegraf";

export interface ISessionData {
  answerYes: boolean;
}

export interface IBotContext extends Context {
  session: ISessionData;
}
