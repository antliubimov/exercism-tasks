//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const lyrics = ['is the horse and the hound and the horn',
  'belonged to the farmer sowing his corn',
  'kept the rooster that crowed in the morn',
  'woke the priest all shaven and shorn',
  'married the man all tattered and torn',
  'kissed the maiden all forlorn',
  'milked the cow with the crumpled horn',
  'tossed the dog',
  'worried the cat',
  'killed the rat',
  'ate the malt',
  'lay in the house that Jack built.'
];

export class House {
  static verse(num) {
    const strs = lyrics.length - num;
    let arr = lyrics.slice(strs);
    arr[0] = `This is ${replaceBeforeThe(arr[0])}`;
    for (let i = 1; i < arr.length; i += 1) {
      arr[i] = `that ${arr[i]}`;
    }
    return arr;
  }

  static verses(start, end) {
    let arr = [];
    for (let i = start; i <= end; i += 1) {
      (this.verse(i)).forEach(x => arr.push(x));
      if (i !== end) {
        arr.push('');
      }
    }
    return arr;
  }
}

const replaceBeforeThe = (str) => {
  let arr = str.split(' ');
  let idx = arr.indexOf('the');
  return arr.slice(idx).join(' ');
}