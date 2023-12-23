import {Markup} from 'telegraf'

export function urlEnWork() {
    return Markup.inlineKeyboard([
        Markup.button.url('My Web site','https://artem-delta.vercel.app/'),
        Markup.button.url('Taxi APP','https://taxi-app-artemsitnikov.vercel.app/'),
        Markup.button.url('NFT market','https://crypter-ten.vercel.app/'),
        Markup.button.url('Car Rent ','https://car-rental-dev.vercel.app/'),
        Markup.button.url('Marathon for weight loss ','https://marafon-rosy.vercel.app/'),
    ], {columns:1})
}

export function likeEnWork() {
    return Markup.inlineKeyboard([
        Markup.button.callback('Like? ❤️','likeEn'),
        Markup.button.callback('Do not like ? 🤔','dislikeEn')
    ], {columns:2})
}