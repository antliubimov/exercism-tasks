export giconst SpiralMatrix = {

  ofSize(num) {
    let arr = new Array(num).fill(0).map(e => new Array(num));
    let value = 1;
    let minRow = 0;
    let maxRow = num - 1;
    let minCol = 0;
    let maxCol = num - 1;
    while (value <= (num ** 2)) {
      for (let i = minCol; i <= maxCol; i += 1) {
        arr[minRow][i] = value;
        value += 1;
      }
      for (let i = minRow + 1; i <= maxRow; i += 1) {
        arr[i][maxCol] = value;
        value += 1;
      }
      for (let i = maxCol - 1; i >= minCol; i -= 1) {
        arr[maxRow][i] = value;
        value += 1;
      }
      for (let i = maxRow - 1; i >= minRow + 1; i -= 1) {
        arr[i][minCol] = value;
        value += 1;
      }
      minCol += 1;
      minRow += 1;
      maxCol -= 1;
      maxRow -= 1;
    }
    return arr;
  }
}