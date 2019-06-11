//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values) {
    this.values = values || [];
  }

  append(list) {
    for (let i = 0; i < list.length(); i += 1) {
      this.values[this.length()] = list.values[i];
    }
    return this;
  }

  concat(list) {
    for (let i = 0; i < list.length(); i += 1) {
      this.append(list.values[i]);
    }
    return this;
  }

  filter(fn) {
    let filterArr = new List();
    for (let i = 0; i < this.length(); i += 1) {
      if (fn(this.values[i])) {
        filterArr.values.push(this.values[i]);
      }
    }
    return filterArr;
  }

  map(fn) {
    for (let i = 0; i < this.length(); i += 1) {
      this.values[i] = fn(this.values[i]);
    }
    return this;
  }

  length() {
    let counter = 0;
    let i = 0;
    while (this.values[i]) {
      counter += 1;
      i += 1;
    }
    return counter;
  }

  foldl(fn, acc) {
    const length = this.length();
    for (let i = 0; i < length; i += 1) {
      acc = fn(acc, this.values[i]);

    }
    return acc;
  }

  foldr(fn, acc) {
    const length = this.length();
    for (let i = length - 1; i >= 0; i -= 1) {
      acc = fn(acc, this.values[i]);
    }
    return acc;
  }

  reverse() {
    let revArr = new List();
    for (let i = this.length() - 1; i >= 0; i -= 1) {
      revArr.values.push(this.values[i]);
    }
    return revArr;
  }
}