import { nextUAIntroduction, urlUaProject,returnUAIntroduction } from './keyboardsUaHr.js';
import { bot } from './index.js'
import { purposeKeyBoardUA } from './keyboards.js';

export function uaHRLogic(){
        
        bot.action('hr',ctx=>{
          ctx.replyWithHTML(`
        Приємно познайомитись <b>${ctx.chat.first_name}</b>🙂
        Хочу коротко розповісти про себе.
        Я - досвідчений Front End розробник, готовий приєднатися до вашої команди. 
        За рік практики в галузі веб розробки я навчився вирішувати складні завдання та долав різні технічні виклики.
        А тепер я хочу розповісти Вам,<b>${ctx.chat.first_name}</b> трохи про себе:
          `,nextUAIntroduction())
        
        })
        bot.action('nextFirst',ctx=>{
            ctx.reply('Володію англійською мовою на рівні Intermediate(B1).')
          setTimeout(()=>{
            const first ='Експерт в:'
            ctx.replyWithHTML(`
            <b>${first}</b> 
            REACT, REDUX, TANSTACK QUERY, TAILWIND, 
            STYLED-COMPONENTS, AXIOX, JAVASCRIPT, SCSS, 
            HTML, PIXEL PERFECT;
            `)
          },2000)
          setTimeout(()=>{
            const first ='Володію основами:'
            ctx.replyWithHTML(`
            <b>${first}</b> 
            TYPESCRIPT, NEXT JS, FIREBASE, Hygraph;
            `)
          },4000)
          setTimeout(()=>{
            const first ='Знайомий з:'
            ctx.replyWithHTML(`
            <b>${first}</b> 
            NODE JS, EXPRESS, MONGO DB, Graphql;
            `)
          },6000)
        
          setTimeout(()=>{
            const first ='Мої особисті навички:'
            ctx.replyWithHTML(`
            <b>${first}</b>
            ➡️ Уважний до деталей; 
            ➡️ Комунікативний; 
            ➡️ Самомотивований;
            ➡️ Люблю працювати у команді;
            ➡️ Адаптивність;
            ➡️ Творчість.
            `)
          },7000)
        
          setTimeout(()=>{
            ctx.replyWithHTML(`
            Дякую, що ознайомились з моїми навичками і знаннями🔥.
            Думаю прийшов час подивитися на мої останні роботи:
            `,urlUaProject())
          },10000)
        })
        
        bot.action('cv',ctx=>{
          ctx.replyWithDocument({source:'./Девелопер_АртемСитніков_CV.pdf',filename:'Девелопер_АртемСитніков_CV.pdf'})
          setTimeout(()=>{
            ctx.reply(`
            Буду чекати вашого дзвінка 📱.
Дякую вам за приділений час🧑‍💻`)
            ctx.replyWithContact({ phone_number:'+3806725180'},"Артем Ситніков🤓")
          },2000)
       
          setTimeout(()=>{
            ctx.reply(`
            Хочете повернутися на початок ${ctx.chat.first_name} ?
        `,  returnUAIntroduction() )
      
          },4000)
        })
        
        bot.action('returnUA',ctx=>{
            ctx.reply('З поверненням 😎',purposeKeyBoardUA())
        })
    
    
    }

