import {Markup} from 'telegraf'

export function getMainMenu() {
    return Markup.keyboard([
        ['/start',]
    ]).resize()
}

export function languageKeyBoard() {
    return Markup.inlineKeyboard([
        Markup.button.callback('Українською','ua'),
        Markup.button.callback('English','en')
    ], {columns:2})
}

export function linkToUser() {
    return Markup.inlineKeyboard([
        Markup.button.url('Посилання','https://t.me/Artem_s91'),
    
    ], {columns:1})

}

export function removeKeyboard(){
    return Markup.removeKeyboard(
      [['/start',]]
    ).resize()
}

export function purposeKeyBoardUA () {
    return Markup.inlineKeyboard([
        Markup.button.callback('Хочете запропонувати мені роботу ?','hr'),
        Markup.button.callback('Хочеш веб застосунок для вошого бізнесу?','workUa'),
        // Markup.button.callback('Просто поспілкуватися','speak')
    ], {columns: 1})
}

export function purposeKeyBoardEn () {
    return Markup.inlineKeyboard([
        Markup.button.callback('Do you want to offer me a job??','hrEn'),
        Markup.button.callback('Do you want a web application for your business?','workEn'),
        // Markup.button.callback('Just to chat?','speakEn')
    ], {columns: 1})
}