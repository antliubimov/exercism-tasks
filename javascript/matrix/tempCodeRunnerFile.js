];
  for (let i = 0; i < arr[0].length; i += 1) {
    let column = [];
    for (let j = 0; j < arr.length; j += 1) {
      column.push(arr[j][i]);
    }
  resArr.push(column);
  }
  return resArr;