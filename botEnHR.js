import { bot } from './index.js'
import { purposeKeyBoardEn } from './keyboards.js'
import { nextEnIntroduction, returnEnIntroduction, urlEnProject } from './keyboardsEnHr.js'


export function enHRLogic(){
        
        bot.action('hrEn',ctx=>{
          ctx.replyWithHTML(`
        Nice to meet you,<b>${ctx.chat.first_name}</b>🙂
I want to tell you a little about myself.
I am an experienced Front End developer ready to join your team. 
During a year of practice in the field of web development, I learned to solve complex tasks and overcome various technical challenges.
And now I want to tell you,<b>${ctx.chat.first_name}</b> a little about myself:
          `,nextEnIntroduction())
        
        })
        
        bot.action('nextSecond',ctx=>{
            ctx.reply('My level of English is Intermediate(B1).')
          setTimeout(()=>{
            const first ='Expert in:'
            ctx.replyWithHTML(`
            <b>${first}</b> 
            REACT, REDUX, TANSTACK QUERY, TAILWIND, 
            STYLED-COMPONENTS, AXIOX, JAVASCRIPT, SCSS, 
            HTML, PIXEL PERFECT;
            `)
          },2000)
          setTimeout(()=>{
            const first ='I have the basics:'
            ctx.replyWithHTML(`
            <b>${first}</b> 
            TYPESCRIPT, NEXT JS, FIREBASE, Hygraph;
            `)
          },4000)
          setTimeout(()=>{
            const first ='Acquaintance with:'
            ctx.replyWithHTML(`
            <b>${first}</b> 
            NODE JS, EXPRESS, MONGO DB, Graphql;
            `)
          },6000)
        
          setTimeout(()=>{
            const first ='My personal skills:'
            ctx.replyWithHTML(`
            <b>${first}</b>
            ➡️  Attentive to details; 
            ➡️  Communicative; 
            ➡️  Self-motivated;
            ➡️  I like to work in a team;
            ➡️  Adaptability;
            ➡️  Creativity.
            `)
          },7000)
        
          setTimeout(()=>{
            ctx.replyWithHTML(`
            Thank you for getting to know my skills and knowledge🔥.
            I think it's time to look at my latest works:
            `,urlEnProject())
          },10000)
        })
        
        bot.action('cvEn',ctx=>{
          ctx.replyWithDocument({source:'./Developer_ArtemSitnikov_CV.pdf',filename:'Developer_ArtemSitnikov_CV.pdf'})
          setTimeout(()=>{
            ctx.reply(`
            I will wait for your call 📱.
Thank you for your time🧑‍💻`)
            ctx.replyWithContact({ phone_number:'+3806725180'},"Artem Sitnikov🤓")
          },2000)
       
          setTimeout(()=>{
            ctx.reply(`
            Want to go back to the beginning  ${ctx.chat.first_name} ?
        `,  returnEnIntroduction() )
      
          },4000)
        })
        
        bot.action('returnEn',ctx=>{
            ctx.reply('Welcome back 😎',purposeKeyBoardEn())
        })
    
    
    }

