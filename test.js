// const date = new Date(utc + (3600000 * offset))
// function to calculate local time
// in a different city
// given the city's UTC offset
function calcTime(city) {
  // create Date object for current location
  const d = new Date();

  // convert to msec
  // add local time zone offset
  // get UTC time in msec
  const utc = d.getTime() + (d.getTimezoneOffset() * 60000);

  // create new Date object for different city
  // using supplied offset
  const nd = new Date(utc + (3600000 * ('+3')));
  console.log(nd);
  // return time as a string
  return `The local time in ${city} is ${nd.toLocaleString()}`;
}

// get Bombay time
// console.log(calcTime('Bombay', '+5.5'));

// // get Singapore time
// console.log(calcTime('Singapore', '+8'));

// // get London time
// console.log(calcTime('London', '+3'));

// Here, the calcTime() function accepts a city name and its UTC offset (in hours). It then internally performs all the calculations described above, and returns a string containing the local time in the named city.

// Here's some sample output from the script in Listing A:

// The local time in Bombay is Monday, August 01, 2005 4:43:51 PM
// The local time in Singapore is Monday, August 01, 2005 7:13:51 PM
// The local time in London is Monday, August 01, 2005 12:13:51 PM
// Hopefully, this script will save you some time the next time you sit down to code time zone calculations in your Web pages. Enjoy!

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

console.log(run());
