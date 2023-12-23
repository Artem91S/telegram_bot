import {Markup} from 'telegraf'


export function nextUAIntroduction() {
    return Markup.inlineKeyboard([
        Markup.button.callback('Продовжуємо','nextFirst'),
    
    ], {columns:1})

}
export function urlUaProject() {
    return Markup.inlineKeyboard([
        Markup.button.url('Мій веб сайт','https://artem-delta.vercel.app/'),
        Markup.button.url('Мій GitHub','https://github.com/Artem91S'),
        Markup.button.url('Мій LinkedIn','https://www.linkedin.com/in/artem-sytnikov-35b55625b/'),
        Markup.button.callback('Хочете отримати  CV,так ?✅', 'cv' )
    ], {columns:1})

}

export function returnUAIntroduction() {
    return Markup.inlineKeyboard([
        Markup.button.callback('Повернутися на початок','returnUA'),
    
    ], {columns:1})

}



