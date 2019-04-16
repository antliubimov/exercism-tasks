export const solve = (x, y) => {
  let result = 0;
  if (x >= 0 && y >= 0) {
    if (x <= 1 && y <= 1) {
      result = 10;
    } else if (x <= 5 && y <= 5) {
      result = 5;
    } else if (x <= 10 && y <= 10) {
      result = 1;
    }
  } else {
    result = null;
  }
  return result;
}
