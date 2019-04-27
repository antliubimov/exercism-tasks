const scrabble = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
}

export const score = (str) => {
  // let result = 0;
  let strArr = str.toUpperCase().split('');
  let result = strArr.reduce((acc, current) => {
    for (let key in scrabble) {
      if (scrabble[key].indexOf(current) !== -1) {
       return acc += Number(key);
      }
    }
  }, 0);
  return result;
}