export const compute = (str1, str2) => {
  let count = 0;
  if (str1.length === 0 && str2.length === 0) {
    return count;
  }
  if (str1.length === 0) {
    throw new Error('left strand must not be empty');
  }
  if (str2.length === 0) {
    throw new Error('right strand must not be empty');
  }
  if (str1.length === str2.length) {
    for (let i = 0; i < str1.length; i += 1) {
      if (str1[i] !== str2[i]) {
        count += 1;
      }
    }
  } else {
    throw new Error('left and right strands must be of equal length');
  }

  return count;
}