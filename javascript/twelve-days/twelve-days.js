//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const ordinals = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];

const lyrics = ['a Partridge in a Pear Tree', 'two Turtle Doves', 'three French Hens', 'four Calling Birds', 'five Gold Rings', 'six Geese-a-Laying', 'seven Swans-a-Swimming', 'eight Maids-a-Milking', 'nine Ladies Dancing', 'ten Lords-a-Leaping', 'eleven Pipers Piping', 'twelve Drummers Drumming'];

export const recite = (...args) => {
  let result = '';
  if (args.length === 1) {
    let str = '';
    if (args[0] > 1) {
      for (let i = args[0] - 1; i > 0; i -= 1) {
        str += `${lyrics[i]}, `;
      }
      str += `and ${lyrics[0]}`
    } else {
      str += `${lyrics[0]}`;
    }
    result = `On the ${ordinals[args[0] - 1]} day of Christmas my true love gave to me: ${str}.\n`;
  } else if (args.length === 2) {
    for (let i = args[0]; i <= args[1]; i += 1) {
      result += (i === args[1]) ? `${recite(i)}` : `${recite(i)}\n`;
    }
  }
  return result;
};