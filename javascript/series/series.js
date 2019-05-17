export class Series {
  constructor(str) {
    this.str = str;
  }

  get digits() {
    return [...this.str].map(x => Number(x));
  }

  slices(digit) {
    if (this.str.length < digit) {
      throw new Error('Slice size is too big.');
    }
    let series = [];
    for (let i = 0; i <= (this.str.length - digit); i += 1) {
      let tmp = this.str.slice(i, digit + i).split('').map(x => Number(x));
      series.push(tmp);
    }
    return series;
  }
}