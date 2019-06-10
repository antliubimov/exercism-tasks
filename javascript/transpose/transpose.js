export const transpose = (arr) => {
  let transArr = [];
  if (arr.length === 0) return transArr;

  let maxElement = [...arr].sort((a, b) => a.length - b.length).pop();
  let maxLength = maxElement.length;

  if (arr.indexOf(maxElement) !== 0) {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].length < maxLength) {
        if (arr.indexOf(arr[i]) < arr.indexOf(maxElement)) {
          arr[i] = addSpace(arr[i], maxLength - arr[i].length);
        } else {
          arr[i] = addSpace(arr[i], maxLength - arr[i].length - 1);
        }
      }
    }
  }

  for (let i = 0; i < maxLength; i += 1) {
    let trans = '';
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j][i]) {
        trans += arr[j][i];
      }
    }
    transArr.push(trans);
  }

  return transArr;
}

const addSpace = (str, num) => {
  return str + ' '.repeat(num);
}