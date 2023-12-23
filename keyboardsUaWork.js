import {Markup} from 'telegraf'

export function urlUaWork() {
    return Markup.inlineKeyboard([
        Markup.button.url('Мій особистий сайт','https://artem-delta.vercel.app/'),
        Markup.button.url('Додаток для таксі','https://taxi-app-artemsitnikov.vercel.app/'),
        Markup.button.url('NFT маркет','https://crypter-ten.vercel.app/'),
        Markup.button.url('Оренда авто','https://car-rental-dev.vercel.app/'),
        Markup.button.url('Марафон для схуднення ','https://marafon-rosy.vercel.app/'),
    ], {columns:1})
}

export function likeUaWork() {
    return Markup.inlineKeyboard([
        Markup.button.callback('Подобається ? ❤️','likeUa'),
        Markup.button.callback('Не дуже ? 🤔','dislikeUa')
    ], {columns:2})
}