//
// This is only a SKELETON file for the 'Pig Latin' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class translator {
  static translate(str) {
    let strArr = str.split(' ');
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y', 'xr', 'yt'];

    let result = strArr.map(str => {
      if (str[0] === 'y' && vowels.includes(str[1])) {
        return str.slice(1) + str[0] + 'ay';
      } else if (vowels.includes(str[0]) || vowels.includes(str[0] + str[1])) {
        return str + 'ay';
      } else if (str.slice(0, 2) === 'qu') {
        return str.slice(2) + str.slice(0, 2) + 'ay';
      } else if (str.slice(1, 3) === 'qu') {
        return str.slice(3) + str.slice(0, 3) + 'ay';
      } else if (!vowels.includes(str[0]) && !vowels.includes(str[1]) && !vowels.includes(str[2])) {
        return str.slice(3) + str.slice(0, 3) + 'ay';
      } else if (!vowels.includes(str[0]) && !vowels.includes(str[1])) {
        return str.slice(2) + str.slice(0, 2) + 'ay';
      } else {
        return str.slice(1) + str[0] + 'ay';
      }
    })
    return result.join(' ');
  }
}