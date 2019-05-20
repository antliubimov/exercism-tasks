export const largestProduct = (str, num) => {
  const regex = /[^\d]/g;
  if (num < 0 || regex.test(str)) {
    throw new Error('Invalid input.');
  }
  if (str.length < num) {
    throw new Error('Slice size is too big.');
  }
  let largest = 0;
  if (num === 0) return 1;
  for (let i = 0; i < str.length - num + 1; i += 1) {
    let tmpStr = str.slice(i, num + i);
    let tmpLarg = 0;
    if (tmpStr.includes('0')) {
      tmpLarg = 0;
    } else {
      tmpLarg = [...tmpStr].reduce((accum, x) => accum *= Number(x), 1);
    }
    if (tmpLarg > largest) {
      largest = tmpLarg;
    }
  }
  return largest;
}