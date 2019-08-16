//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Diamond {
  makeDiamond(letter) {
    if (letter.charCodeAt(0) < 65 && letter.charCodeAt(0) > 90) {
      throw new Error('Enter upper letter [A - Z]');
    }

    let result = '';
    let length = (letter.charCodeAt(0) - 64) * 2 - 2;
    let middle = Math.floor(length / 2);

    for (let i = 0; i <= middle; i += 1) {
      let row = '';
      if (i <= middle) {
        for (let j = 0; j <= length; j += 1) {
          if (j === middle - i || j === middle + i) {
            row += String.fromCharCode(65 + i);
          } else {
            row += ' ';
          }
        }
      }
      result += `${row}\n`;
    }

    for (let i = 0; i < middle; i += 1) {
      let row = '';
      for (let j = 0; j <= length; j += 1) {
        if (j === i + 1 || j === length - i - 1) { ///?????
          row += String.fromCharCode(65 + middle - i - 1);
        } else {
          row += ' ';
        }
      }
      result += `${row}\n`;
    }

    return result;
  }
}