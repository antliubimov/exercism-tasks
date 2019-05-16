const arrTransparent = (arr) => {
  let resArr = [];
  for (let i = 0; i < arr[0].length; i += 1) {
    let column = [];
    for (let j = 0; j < arr.length; j += 1) {
      column.push(arr[j][i]);
    }
  resArr.push(column);
  }
  return resArr;
};

export class Matrix {
  constructor (str) {
    this.rows = str.split('\n').map(x => x.split(' ').map(Number));
    this.columns = arrTransparent(this.rows);
  }
}
