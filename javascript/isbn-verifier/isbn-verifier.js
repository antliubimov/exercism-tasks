//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ISBN {
  constructor(str) {
    this.str = str;
  }

  isValid() {
    let regEx = /[A-WYZ]/g;
    if (regEx.test(this.str)) {
      return false;
    }
    let filterStr = this.str.replace(/-/g, '').split('');
    if (filterStr.length !== 10) return false;
    let result = filterStr.reduce((acc, elem, idx) => {
      if (elem === 'X') {
        elem = 10;
      }
      idx = 10 - idx;
      return acc += elem * idx;
    }, 0);
    return !(result % 11);
  }
}