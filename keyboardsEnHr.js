import {Markup} from 'telegraf'


export function nextEnIntroduction() {
    return Markup.inlineKeyboard([
        Markup.button.callback('We continue','nextSecond'),
    
    ], {columns:1})

}
export function urlEnProject() {
    return Markup.inlineKeyboard([
        Markup.button.url('My own website about me','https://artem-delta.vercel.app/'),
        Markup.button.url('My GitHub','https://github.com/Artem91S'),
        Markup.button.url('My LinkedIn','https://www.linkedin.com/in/artem-sytnikov-35b55625b/'),
        Markup.button.callback('Do you want to receive a CV ?✅', 'cvEn' )
    ], {columns:1})

}

export function returnEnIntroduction() {
    return Markup.inlineKeyboard([
        Markup.button.callback('Return to the beginning','returnEn'),
    
    ], {columns:1})

}



