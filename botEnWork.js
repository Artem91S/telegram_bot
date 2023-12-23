import { bot } from "./index.js";
import { linkToUser } from "./keyboards.js";
import { likeEnWork, urlEnWork } from "./keyboardsUaWork.js";

export function uaWorkLogic() {
  bot.action("workEn", (ctx) => {
    ctx.reply(`
Hi,my future client.👋🏻
Let's get to know each other better.

I am Artem, a web developer with more than one and a half years of experience. 
My goal is not only to create websites, but also to provide you with technologically advanced and efficient solutions. 🚀
In my work, I use the latest technologies so that your project is not only modern, but also competitive.
Ready to take responsibility for every stage of development and take into account all your needs. 💼 

For me, your success comes first. 
Let's create something spectacular together! 🚀
        `);

    setTimeout(() => {
      ctx.reply("I suggest you look at my latest works 📀", urlEnWork());
    }, 3000);

    setTimeout(() => {
      ctx.reply("What do you say about my work?", likeEnWork());
    }, 10000);
  });

  bot.action("likeEn", (ctx) => {
    ctx.reply("👍");
    ctx.reply("I suggest you write to me in private", linkToUser());
    setTimeout(() => {
      ctx.reply("Or you can call me 📢");
      ctx.replyWithContact(
        { phone_number: "+3806725180" },
        "Artem Web developer"
      );
    }, 3000);

    setTimeout(() => {
      ctx.reply("I miss you and am waiting for your call 🥺");
    }, 4000);
  });
  bot.action("dislikeEn", (ctx) => {
    ctx.reply("👀");
    ctx.reply(
      `
Please write in your private message what you did not like.
Your feedback will help me become better.
I am waiting for your message!
`,
      linkToUser()
    );
    setTimeout(() => {
      ctx.replyWithHTML(`
I will be glad to talk with you ${ctx.chat.first_name}.
Thank you 🤝
`);
      ctx.replyWithContact(
        { phone_number: "+3806725180" },
        "Artem Web developer"
      );
    }, 4000);
  });
}
