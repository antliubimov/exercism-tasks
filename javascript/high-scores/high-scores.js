export class HighScores {
  constructor(arr) {
    this.arr = arr;
  }
  get scores() {
    return this.arr;
  }
  get latest() {
    return this.arr[this.arr.length - 1];
  }
  get personalBest() {
    let sortArr = this.arr.sort((a, b) => a - b);
    return sortArr[sortArr.length - 1];
  }
  get personalTopThree() {
    let sortArr = this.arr.sort((a, b) => b - a);
    return sortArr.slice(0, 3);
  }
}