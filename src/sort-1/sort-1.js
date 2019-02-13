
var fs = require('fs');
var input = fs.readFileSync('./dev/stdin').toString().trim().split('\n')
var inputCnt = input.shift();

function sort(targetList) {
  for(var i = 0; i < targetList.length; i += 1) {
    for (var j = i; j < targetList.length; j += 1) {
      if (targetList[i] > targetList[j]) {
        var tmp = targetList[i];
        targetList[i] = targetList[j];
        targetList[j] = tmp;
      }
    }
  }
  return targetList;
}

var inputNumberList = [];
for (var i = 0; i < inputCnt; i++) {
  inputNumberList.push(parseInt(input[i]));
}

var sortedList = sort(inputNumberList);
for (var i = 0; i < sortedList.length; i += 1) {
  console.log(sortedList[i]);
}