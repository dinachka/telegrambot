// const { Telegraf, Markup } = require('telegraf')
// process.env.NTBA_FIX_319 = 1;
require('dotenv').config();
const tzDate = require('datejs');

// const schedule = require('node-schedule');

const TelegramApi = require('node-telegram-bot-api');
const { gameOptions, againOptions } = require('./options');

const chats = {};
const bot = new TelegramApi(process.env.BOT_TOKEN, { polling: true });

const start = () => {
  bot.setMyCommands([
    { command: '/start', description: 'приветствие' },
    // { command: '/info', description: 'информация' },
    { command: '/igra', description: 'игра' },
    { command: '/reminder', description: 'добавить напоминание' },
    { command: '/timezone', description: 'установить часовой пояс' },

  ]);
  // const startGame = async (chatId) => {
  //   try {
  //     await bot.sendMessage(chatId, 'сейчас я загадаю цифру от 0 до 9, а ты попробуй отгадать');
  //   } catch (err) {
  //     return bot.sendMessage(chatId, 'произошла ошибка');
  //   }

  //   try {
  //     const randomNum = Math.floor(Math.random() * 10);
  //     chats[chatId] = randomNum;
  //     await bot.sendMessage(chatId, 'отгадывай', gameOptions);
  //   } catch (err) {
  //     return bot.sendMessage(chatId, 'произошла ошибка');
  //   }
  // };
  bot.on('message', (msg) => {
    const { text } = msg;
    const chatId = msg.chat.id;
    const { username } = msg.chat;
    console.log(msg);

    if (text === '/start') {
      return bot.sendMessage(chatId, `приветик, ${username}`);
    }
    if (text === '/info') {
      return bot.sendMessage(chatId, `приветик, ${username}`);
    }
    if (text === '/igra') {
      return bot.sendMessage(chatId, `приветик, ${username}`);

      // return startGame(chatId);
    }
    if (text === '/timezone') {
      return bot.sendMessage(chatId, `приветик, ${username}`);

      // return startGame(chatId);
    }

    if (text === '/reminder') {
      // bot.sendMessage(chatId, `${username}, сначала установите свой часовой пояс командой /timezone`);

      bot.sendMessage(chatId, `${username}, введите пожалуйста текст и время напоминания. пример: "поехать на мальдивы в 13:59"`);
    }
  });

  // bot.on('callback_query', (msg) => {
  //   const { data } = msg;
  //   const chatId = msg.message.chat.id;

  //   if (data === '/again') {
  //     return startGame(chatId);
  //   }

  //   if (data === chats[chatId]) {
  //     return bot.sendMessage(chatId, `поздравляю, ты угадал цифру ${chats[chatId]}`, againOptions);
  //   }
  //   return bot.sendMessage(chatId, `ты не угадал, я загадала цифру ${chats[chatId]}`, againOptions);
  // });
};

start();

// const TelegramBot = require('node-telegram-bot-api');
// const token = process.env.BOT_TOKEN;
// const bot = new TelegramBot(token, { polling: true });

const notes = [];

bot.onText(/(.+) в (.+)/, (msg, match) => {
  const userId = msg.from.id;
  const text = match[1];
  const time = match[2];

  notes.push({ userid: userId, time, text });

  bot.sendMessage(userId, `Отлично! Я обязательно напомню ${text} в ${time}`);
});

setInterval(() => {
  for (let i = 0; i < notes.length; i++) {
    const UTCtimeZone = new Date().toLocaleString('ru-RU', { hour12: false }, { timeZone: 'UTC' });
    const hour = Number(`${UTCtimeZone.slice(12, -6)}`) + 3;
    const curDate = `${hour}:${new Date().getMinutes()}`;
    if (notes[i].time == curDate) {
      bot.sendMessage(notes[i].userid, `НАПОМИНАНИЕ!!!!!!!!!!!! вы должны ${notes[i].text} сейчас.`);
      notes.splice(i, 1);
    }
  }
}, 1000);
