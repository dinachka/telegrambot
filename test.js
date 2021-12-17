
const run = () => {
  // setInterval(() => {
    const d = new Date();
    const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    const date = new Date(utc + (3600000 * ('+3'))).toLocaleString();
    return date.slice(12, -6)
    // return `${MoscowTimeZone}:${new Date().getMinutes()}`;

    // if (notes[i].time === curDate) {
    //   bot.sendMessage(notes[i].userid, `НАПОМИНАНИЕ!!!!!!!!!!!! вы должны ${notes[i].text} сейчас.`);
    //   notes.splice(i, 1);
    // }
  // }, 1000);
};

// console.log(run());

// const str = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' });
// const data = str.slice(12, -6)
// console.log(data);


// const MoscowTimeZone = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' });

// const data = `${MoscowTimeZone.slice(12, -6)}`;
// console.log(data);


const MoscowTimeZone = new Date().toLocaleString('ru-RU', { hour12: false }, { timeZone: 'Europe/Moscow' });

const data = Number(`${MoscowTimeZone.slice(12, -6)}`) + 3;
console.log(data);
