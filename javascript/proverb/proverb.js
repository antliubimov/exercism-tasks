//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...list) => {
  let arr = [...list];
  let result = '';
  let length = arr.length - 1;

  if (typeof arr[arr.length - 1] === 'object') {
    length -= 1;
  }

  for (let i = 0; i < length; i += 1) {
    result += `For want of a ${arr[i]} the ${arr[i + 1]} was lost.\n`;
  }

  if (typeof arr[arr.length - 1] === 'object') {
    let value = Object.values(arr[arr.length - 1]).shift();
    result += `And all for the want of a ${value} ${arr[0]}.`;
  } else {
    result += `And all for the want of a ${arr[0]}.`;
  }

  return result;
};