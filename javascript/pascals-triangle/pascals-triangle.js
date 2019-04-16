export class Triangle {
  constructor(num) {
    this.rows = triangleRows(num);
    this.lastRow = this.rows[this.rows.length - 1];
  }
}

const triangleRows = (num) => {
  let resArr = [];
  if (num > 0) {
    resArr[0] = [1];
    for (let i = 1; i < num; i += 1) {
      resArr[i] = [];
      for (let j = 1; j <= i; j += 1) {
        resArr[i][0] = 1;
        if (!resArr[i - 1][j]) {
          resArr[i][j] = resArr[i - 1][j - 1];
        } else {
          resArr[i][j] = resArr[i - 1][j] + resArr[i - 1][j - 1];
        }

      }
    }
  }
  return resArr;
}