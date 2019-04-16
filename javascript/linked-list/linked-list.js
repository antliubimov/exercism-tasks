class Node {
  constructor(data = null) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  count() {
    if (this.head === null && this.tail === null) {
      return 0;
    }
    let current = this.head;
    let counter = 0;
    while (current !== null) {
      counter += 1;
      current = current.next;
    }
    return counter;
  }

  // insert value at back
  push(item) {
    const newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      newNode.tail = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // remove value at back
  pop() {
    if (this.count() > 0) {
      let res = this.tail.data;
      this.delete(this.tail.data);
      return res;
    }
    return false;
  }

  // remove value at front
  shift() {
    if (this.count() > 0) {
      let res = this.head.data;
      this.delete(this.head.data);
      return res;
    } else {
      return false;
    }
  }

  // insert value at front
  unshift(item) {
    const newNode = new Node(item);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  // delete the element
  delete(item) {
    if (this.count() > 0) {
      let current = this.head;
      while (current) {
        if (current.data === item) {
          if (current === this.head && current === this.tail) {
            this.head = null;
            this.tail = null;
          } else if (current === this.head) {
            this.head = current.next;
            this.head.prev = null;
          } else if (current === this.tail) {
            this.tail = current.prev;
            this.tail.next = null;
          } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
          }
        }
        current = current.next;
      }
    } else {
      return false;
    }
  }
}