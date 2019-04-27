export class Squares {
  constructor(num) {
    this.num = num;
  }
  get squareOfSum() {
    let i = 1;
    let result = 0;
    while (i <= this.num) {
      result += i;
      i += 1;
    }
    return result**2;
  }

  get sumOfSquares() {
    let i = 1;
    let result = 0;
    while (i <= this.num) {
      result += i**2;
      i += 1;
    }
    return result;
  }

  get difference() {
    return Math.abs(this.squareOfSum - this.sumOfSquares);
  }
}