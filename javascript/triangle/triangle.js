export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  kind() {
    return kindTriangle(this.side1, this.side2, this.side3);
  }

}

const kindTriangle = (s1, s2, s3) => {
  if (s1 <= 0 || s2 <= 0 || s3 <= 0) {
    throw new Error('Side less than 0.');
  }
  if ((s1 + s2) < s3 || (s1 + s3) < s2 || (s3 + s2) < s1) {
    throw new Error('This triangle is a degenerate triangle.');
  }
  if (s1 === s2 && s2 === s3) {
    return 'equilateral';
  } else if (s1 === s2 || s1 === s3 || s2 === s3) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}