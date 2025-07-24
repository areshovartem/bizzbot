const TelegramBot = require('node-telegram-bot-api');

// Вставь свой токен от BotFather
const token = '8264773151:AAGBxb2MMV-8I9fsAe9ytGM76L0njqc9kPY';

const bot = new TelegramBot(token, { polling: true });

// Сайт, который ты разместил на Vercel
const WEB_APP_URL = 'https://bizzbot.vercel.app';

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '👋 Привет! Нажми кнопку ниже, чтобы открыть BizzBot:', {
    reply_markup: {
      inline_keyboard: [[
        { text: 'Открыть BizzBot', web_app: { url: WEB_APP_URL } }
      ]]
    }
  });
});
