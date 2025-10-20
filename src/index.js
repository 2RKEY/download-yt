const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.BOT_TOKEN;
const bot = new Bot (token, {polling: true})

bot.onText(/\/start/, (msg) => {
    const chadId = msg.chat.id;
    bot.sendMessage(chatId, 'Вставь сюда ссылку на видео')
})