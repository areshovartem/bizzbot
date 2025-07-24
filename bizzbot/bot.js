const TelegramBot = require('node-telegram-bot-api');

// 👇 СЮДА вставляй свой токен
const token = '8264773151:AAGBxb2MMV-8I9fsAe9ytGM76L0njqc9kPY';

const bot = new TelegramBot(token, { polling: true });

// URL на твою опубликованную HTML-страницу
const WEB_APP_URL = 'https://your-deployment.vercel.app'; // подставь сюда реальную ссылку

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, '🚀 Запусти BizzBot ниже:', {
    reply_markup: {
      inline_keyboard: [[
        { text: "Открыть BizzBot", web_app: { url: WEB_APP_URL } }
      ]]
    }
  });
});
