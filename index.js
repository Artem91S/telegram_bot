import express from "express";
import { Telegraf } from "telegraf";
import dotenv from 'dotenv-safe'

import {
  getMainMenu,
  languageKeyBoard,
  linkToUser,
  removeKeyboard,
  purposeKeyBoardUA,
  purposeKeyBoardEn
} from "./keyboards.js";
import { uaHRLogic } from "./botUaHR.js";
import { enHRLogic } from "./botEnHR.js";
import { uaWorkLogic } from "./botUaWork.js";

dotenv.config()
const app = express();
app.use(express.static('public'))
// export const bot = new Telegraf(process.env.BOT_TOKEN);

// console.log(process.env.BOT_TOKEN);
// BOT_TOKEN='123456789:AAGjzuxw7m3qOxXzxtoPfp1W2u61BMnDkMw' npm start
/////початок роботи бота
// bot.start((ctx) => {

//   ctx.reply(
//     `
// Вітаю!👋🏻
// Мене звати Артем і ви знаходитесь у моєму боті. `,
//     removeKeyboard()
//   );

//   ctx.reply(
//     `Цей бот інформаційний.
// Якщо ви хочете написати мені, пишіть в особисте✍️`,
//     linkToUser()
//   );
//   setTimeout(() => {
//     ctx.reply("На якій мові ви хочете спілкуватися ? ", languageKeyBoard());
//   }, 3000);
// });

// bot.action("ua", (ctx) => {
//   ctx.reply(
//     "Дякую за відповідь🇺🇦. Тепер підскажіть будь ласка з якою метою ви тут:",
//     purposeKeyBoardUA()
//   );
// });

// bot.action("en", (ctx) => {
//   ctx.reply(
//     "Thanks for the answer🇺🇸. Now please tell me for what purpose you are here:",
//     purposeKeyBoardEn()
//   );
// });

// uaHRLogic();
// enHRLogic();
// uaWorkLogic()

// bot.on("text", (ctx) => {
//   ctx.replyWithHTML(
//     `
//     <b>${ctx.chat.first_name}</b>,не пишіть самостійно текст😥.
// Якщо ви хочете почати, натисніть кнопку почати нижче
//     `,
//     getMainMenu()
//   );
// });



// bot.launch();

app.listen(() => console.log(`My server is running on port 4000`));
