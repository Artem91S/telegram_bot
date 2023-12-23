import { bot } from "./index.js";
import { linkToUser } from "./keyboards.js";
import { likeUaWork, urlUaWork } from "./keyboardsUaWork.js";

export function uaWorkLogic() {
  bot.action("workUa", (ctx) => {
    ctx.reply(`
Вітаю тебе мій майбутній клієнт.👋🏻
Давай познайомимося по ближче.

Я - Артем, веб-розробник із понад півтора років досвіду. 
Моя мета - не лише створювати веб-сайти, але й надавати вам технологічно передові та ефективні рішення. 🚀
У моїй роботі я використовую найновіші технології, щоб ваш проект був не лише сучасним, але й конкурентоспроможним.
Готовий взяти на себе відповідальність за кожен етап розробки та врахувати всі ваші потреби. 💼 

Для мене ваш успіх — на першому місці. 
Давайте створимо разом щось вражаюче! 🚀
        `);

    setTimeout(() => {
      ctx.reply("Пропоную подивится на мої останні роботи 📀", urlUaWork());
    }, 3000);

    setTimeout(() => {
      ctx.reply("Що скажеш про мою роботу ?", likeUaWork());
    }, 10000);
  });

  bot.action("likeUa", (ctx) => {
    ctx.reply("👍");
    ctx.reply("Пропоную вам написати мені в особисте ", linkToUser());
    setTimeout(() => {
      ctx.reply("Або ви можете набрати мене 📢");
      ctx.replyWithContact(
        { phone_number: "+3806725180" },
        "Артем Веб Розробник"
      );
    }, 3000);

    setTimeout(() => {
      ctx.reply("Вже сумую за вами і чекаю вашого дзвінка 🥺");
      ctx.replyWithContact(
        { phone_number: "+3806725180" },
        "Артем Веб Розробник"
      );
    }, 4000);
  });
  bot.action("dislikeUa", (ctx) => {
    ctx.reply("👀");
    ctx.reply(
      `
Напишіть будь ласка в особисте, що вам несподобалось
Ваш зворотній звязок доможе стати мені кращим.
Чекаю вашого повідомлення!
`,
      linkToUser()
    );
    setTimeout(() => {
      ctx.replyWithHTML(`
Буду радий поспілкуватися з вами ${ctx.chat.first_name}.
Дякую 🤝
`);
      ctx.replyWithContact(
        { phone_number: "+3806725180" },
        "Артем Веб Розробник"
      );
    }, 4000);
  });
}
