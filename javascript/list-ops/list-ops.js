//
// This is only a SKELETON file for the 'List - Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(values) {
    this.values = values || [];
  }

  append(list) {
    let appendArr = new List();
    appendArr.values = [...this.values];
    for (let i = 0; i < list.length(); i += 1) {
      appendArr.values[appendArr.length()] = list.values[i];
    }
    return appendArr;
  }

  concat(list) {
    let concatArr = new List();
    concatArr.values = [...this.values];
    for (let i = 0; i < list.length(); i += 1) {
      concatArr = concatArr.append(list.values[i]);
    }
    return concatArr;
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
    let mapArr = new List();
    for (let i = 0; i < this.length(); i += 1) {
      mapArr.values[i] = fn(this.values[i]);
    }
    return mapArr;
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

const list1 = new List([1, 2]);
const list2 = new List([3]);
const list3 = new List([]);
const list4 = new List([4, 5, 6]);
const listOfLists = new List([list2, list3, list4])
console.log(list1.concat(listOfLists));