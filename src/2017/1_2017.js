
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');

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

function getDayOfTheWeek(month, day) {
  let totalDays = day;
  for (let i = 1; i < month; i += 1) {
    totalDays += DAYS[i - 1];
  }

  return DAY_OF_THE_WEEK[totalDays % 7];
}

var a = Number(input[0]);
var b = Number(input[1]);
console.log(getDayOfTheWeek(a, b));