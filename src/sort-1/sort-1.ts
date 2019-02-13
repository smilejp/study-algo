

function quickSort(targetList: number[]) {
  return targetList.sort(function (lhs, rhs) {
    if (lhs > rhs) return 1;
    if (lhs < rhs) return -1;
    return 0;
  });
}

function mergeSort(targetList: number[]) {
  if (targetList.length <= 1) return targetList;

  var middleIndex = Math.floor(targetList.length / 2)
  var leftList = targetList.slice(0, middleIndex);
  var rightList = targetList.slice(middleIndex, targetList.length);

  var leftResult = mergeSort(leftList);
  var rightResult = mergeSort(rightList);

  var i = 0;
  var j = 0;
  var result = [];

  while (i < leftResult.length && j < rightResult.length) {
    if (leftResult[i] < rightResult[j]) {
      result.push(leftResult[i]);
      i += 1;
    } else {
      result.push(rightResult[j]);
      j += 1;
    }
  }

  result = result.concat(leftResult.slice(i, leftResult.length))
  result = result.concat(rightResult.slice(j, rightResult.length))
  return result;
}

function selectionSort(targetList: number[]) {
  for(let i = 0; i < targetList.length; i += 1) {
    var minOffset = i;
    for (let j = i + 1; j < targetList.length; j += 1) {
      if (targetList[minOffset] > targetList[j]) {
        minOffset = j;
      }
    }

    if (minOffset !== i) {
      let tmp = targetList[i];
      targetList[i] = targetList[minOffset];
      targetList[minOffset] = tmp;
    }
  }
  return targetList;
}

function worstSort(targetList: number[]) {
  for(let i = 0; i < targetList.length; i += 1) {
    for (let j = i + 1; j < targetList.length; j += 1) {
      if (targetList[i] > targetList[j]) {
        let tmp = targetList[i];
        targetList[i] = targetList[j];
        targetList[j] = tmp;
      }
    }
  }
  return targetList;
}

export function sort(targetList: number[]) {
  return quickSort(targetList);
}