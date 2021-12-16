const { Telegraf, Markup } = require('telegraf')
require('dotenv').config();
const text = require('./const');
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply(`привет, ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}!`))
bot.help((ctx) => ctx.reply(text.commands))

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

// const TelegramApi = require('node-telegram-bot-api');
// const { gameOptions, againOptions } = require('./options');

// const token = '5041189049:AAFCGUAIYh7_sdBWrSfhe5qF2j-yfMRv5jE';
// const chats = {};
// const bot = new TelegramApi(token, { polling: true });
// const start = () => {
//   bot.setMyCommands([
//     { command: '/start', description: 'приветствие' },
//     { command: '/info', description: 'информация' },
//     { command: '/igra', description: 'игра' },
//   ]);
//   const startGame = async (chatId) => {
//     await bot.sendMessage(chatId, 'сейчас я загадаю цифру от 0 до 9, а ты попробуй отгадать');
//     const randomNum = Math.floor(Math.random() * 10);
//     chats[chatId] = randomNum;
//     await bot.sendMessage(chatId, 'отгадывай', gameOptions);
//   }
 
//   bot.on('message', async (msg) => {
//     const { text } = msg;
//     const chatId = msg.chat.id;
//     const { username } = msg.chat;
//     // bot.sendMessage(chatId, `привет, ${username},ты написал мне ${text}`);
//     console.log(msg);

//     if (text === '/start') {
//       return bot.sendMessage(chatId, `привет, ${username}`);
//     }
//     if (text === '/info') {
//       return bot.sendMessage(chatId, `привет, ${username}`);
//     }

//     if (text === '/igra') {
//       return startGame(chatId);
//     }
//     return bot.sendMessage(chatId, 'я тебя не понимаю');
//   });

//   bot.on('callback_query', (msg) => {
//     const { data } = msg;
//     const chatId = msg.message.chat.id;

//     if (data === '/again') {
//       return startGame(chatId);
//     };

//     if (data === chats[chatId]) {
//       return bot.sendMessage(chatId, `поздравляю, ты угадал цифру ${chats[chatId]}`, againOptions);
//     }
//     return bot.sendMessage(chatId, `ты не угадал, я загадала цифру ${chats[chatId]}`, againOptions);

//     // bot.sendMessage(chatId, `ты выбрал цифру ${data}`);
//     // console.log(msg);
//   });
// };

// start();
