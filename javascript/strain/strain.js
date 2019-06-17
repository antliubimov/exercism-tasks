//
// This is only a SKELETON file for the 'Strain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const keep = (arr, fn) => {
  let resArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (fn(arr[i])) {
      resArr.push(arr[i]);
    }
  }
  return resArr;
};

export const discard = (arr, fn) => {
  let resArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (!fn(arr[i])) {
      resArr.push(arr[i]);
    }
  }
  return resArr;
};