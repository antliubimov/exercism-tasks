//
// This is only a SKELETON file for the 'Beer Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BeerSong {
  static verse(num) {
    let result = '';
    if (num === 0) {
      result = `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`;
    } else if (num === 1) {
      result = `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;
    } else {
      result = `${num} bottles of beer on the wall, ${num} bottles of beer.\nTake one down and pass it around, ${num - 1} ${((num - 1) !== 1) ? 'bottles' : 'bottle'} of beer on the wall.\n`;
    }
    return result;
  }

  static sing(from = 99, to = 0) {
    let result = '';
    for (let i = from; i >= to; i -= 1) {
      result += (i !== to) ? `${this.verse(i)}\n` : `${this.verse(i)}`;
    }
    return result;
  }
}