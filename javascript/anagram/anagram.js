export class Anagram {
  constructor(str) {
    this.str = str;
  }

  matches(arr) {
    let result = [];
    let lowerStr = this.str.toLowerCase();
    let sortStr = lowerStr.split('').sort().join();
    arr.forEach(x => {
      let lowerX = x.toLowerCase();
      let sortX = lowerX.split('').sort().join();
      if (lowerStr !== lowerX) {
        if (sortStr === sortX) {
          result.push(x);
        }
      }
    })
    return result;
  }
}