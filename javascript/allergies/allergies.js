const allergScore = [128, 64, 32, 16, 8, 4, 2, 1];
const allergie = ['cats', 'pollen', 'chocolate', 'tomatoes', 'strawberries', 'shellfish', 'peanuts', 'eggs'];

export class Allergies {
  constructor(num) {
    this.num = num;
  }
  list() {
    let result = [];
    if (this.num > 256) {
      this.num = this.num - 256;
    }
    for (let i = 0; i < allergScore.length; i += 1) {
      if ((this.num - allergScore[i]) >= 0) {
        result.unshift(allergie[i]);
        this.num -= allergScore[i];
      }
    }
    return result;
  }
  allergicTo(str) {
    return (this.list().indexOf(str) !== -1);
  }
}