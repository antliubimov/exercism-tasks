//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const first = ["fly.\nI don't know why she swallowed the fly. Perhaps she'll die.\n", 'spider.\nIt wriggled and jiggled and tickled inside her.\n', 'bird.\nHow absurd to swallow a bird!\n', 'cat.\nImagine that, to swallow a cat!\n', 'dog.\nWhat a hog, to swallow a dog!\n', 'goat.\nJust opened her throat and swallowed a goat!\n', "cow.\nI don't know how she swallowed a cow!\n", "horse.\nShe's dead, of course!\n"];

const second = ["spider to catch the fly.\nI don't know why she swallowed the fly. Perhaps she'll die.\n", 'bird to catch the spider that wriggled and jiggled and tickled inside her.\n', 'cat to catch the bird.\n', 'dog to catch the cat.\n', 'goat to catch the dog.\n', 'cow to catch the goat.\n'];

export class Song {
  verse(num) {
    if (num < 1 || num > 9) {
      throw new Error('Enter number more than 0 and less than 9');
    }
    const sentence = 'I know an old lady who swallowed a ';
    if (num === 1) {
      return sentence + first[0];
    }
    if (num === 8) {
      return sentence + first[7];
    }
    let result = '';
    result += sentence + first[num - 1];
    for (let i = num - 2; i >= 0; i -= 1) {
      result += 'She swallowed the ' + second[i];
    }
    return result;
  }

  verses(start, finish) {
    let result = '';
    for (let i = start; i <= finish; i += 1) {
      result += `${this.verse(i)}\n`;
    }
    return result;
  }
}