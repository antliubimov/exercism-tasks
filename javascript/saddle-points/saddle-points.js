export class Matrix {
  constructor(matrix) {
    this.matrix = matrix;
    this.rows = matrix.split('\n').map(x => x.split(' ').map(elem => Number(elem)));
    let cols = (arr) => {
      let colArr = [];
      for (let i = 0; i < arr[0].length; i += 1) {
        let newArr = [];
        for (let j = 0; j < arr.length; j += 1) {
          newArr.push(arr[j][i]);
        }
        colArr.push(newArr);
      }
      return colArr;
    };
    this.columns = cols(this.rows);
    let saddle = () => {
      let sad = [];
      let rows = this.rows;
      let columns = this.columns;
      for (let i = 0; i < rows.length; i += 1) {
        let great = isGreatest(rows[i]); // return [great - max element of row]
        let idx = rows[i].indexOf(great);
        while ( idx !== -1) {
          let index = rows[i].indexOf(great, idx);
          if (columns[index][i] === isSmallest(columns[index])) {
            sad.push([i, index]);
          }
          idx = rows[i].indexOf(great, idx + 1);
        }
      }
      return sad;
    };
    this.saddlePoints = saddle();
  }
}

const isGreatest = (row) => {
  return [...row].sort((a, b) => a - b).pop();
}

const isSmallest = (cols) => {
  return [...cols].sort((a, b) => a - b).shift();
}