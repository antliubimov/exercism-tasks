export class Words {
  constructor() {

  }
  count(str) {
    let result = {};
    const regEx = /[^\s]+/g;
    let arr = str.toLowerCase().match(regEx);

    arr.forEach(x => {
      let count = 0;
      let idx = arr.indexOf(x);
      while (idx !== -1) {
        count += 1;
        idx = arr.indexOf(x, idx + 1)
      }
      result[x] = count;
    });
    return result;
  }
}