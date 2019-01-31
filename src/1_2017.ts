
const DAY_OF_THE_WEEK = [
  'SUN',
  'MON',
  'TUE',
  'WED',
  'THU',
  'FRI',
  'SAT'
]

const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

export function getDayOfTheWeek(month, day) {
  let totalDays = day;
  for (let i = 1; i < month; i += 1) {
    totalDays += DAYS[i - 1];
  }

  return DAY_OF_THE_WEEK[totalDays % 7];
}

// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// process.stdin.on('data', function(chunk) {
//   var splitted = chunk.split(' ');
//   process.stdout.write(getDayOfTheWeek(splitted[0], splitted[1]));
// });
// process.stdin.on('end', function() {
//   process.stdout.write('end');
// });



// var readline = require('readline');
// var r = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// r.question('', function (ans) {
//   var splitted = ans.split(' ');
//   console.log(getDayOfTheWeek(splitted[0], splitted[1]));
//   r.close();
// });