//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const numbers = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion'
};

const divider = [1000000000, 1000000, 1000, 100];

let del = (length) => {
  let n = '1';
  for (let i = 1; i < length; i += 1) {
    n += '0';
  }
  return Number(n);
}

const leng = (num) => String(num).length;

const engl = num => {
  let result = '';

  for (let i = 0, length = divider.length; i < length; i += 1) {
    let tmp = num;
    if (num < divider[i]) continue;
    if (num >= divider[i] && num > 19) {
      tmp = Number(Math.floor(num / divider[i]).toFixed());

      if (leng(tmp) > 2) {
        result += `${engl(tmp)} ${numbers[divider[i]]}`;
      } else {
        result += (result === '') ? `${numbers[tmp]} ${numbers[divider[i]]}` : ` ${numbers[tmp]} ${numbers[divider[i]]}`;
      }

      if (num % divider[i] > 0) {
        result += ' ' + engl(num % divider[i]);
        return result;
      }
      if (num % divider[i] === 0) return result;
    }
  }
  if (leng(num) == 2 && num > 20) {
    let tmp = Math.floor(num / 10) * 10;
    num = num % 10;
    result += (result === '') ? `${numbers[tmp]}-${numbers[num]}` : ` ${numbers[tmp]}-${numbers[num]}`;
  } else {
    result += (result === '') ? `${numbers[num]}` : ` ${numbers[num]}`;
    num = 0;
  }
  return result;
}

export class Say {
  inEnglish(num) {
    if (num < 0 || num > 999999999999) {
      throw new Error('Number must be between 0 and 999,999,999,999.');
    }

    return engl(num);
  }
}