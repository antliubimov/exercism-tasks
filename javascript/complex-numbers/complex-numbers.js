export class ComplexNumber {
  constructor (a, b) {
    this.a = a;
    this.b = b;
    this.real = this.a;
    this.imag = this.b;
    this.abs = Math.abs(Math.sqrt(a ** 2 + b ** 2));
  }

  get exp() {
    return new ComplexNumber((Math.E ** this.a) * Math.cos(this.b), (Math.E ** this.a) * Math.sin(this.b));
  }

  get conj() {
    if (this.b === 0) {
      this.b = 0;
    } else {
      this.b = -this.b;
    }
    return new ComplexNumber(this.a, this.b);
  }

  add(complex) {
    return new ComplexNumber((this.a + complex.a), (this.b + complex.b));
  }

  sub(complex) {
    return new ComplexNumber((this.a - complex.a), (this.b - complex.b));
  }

  mul(complex) {
    return new ComplexNumber((this.a * complex.a - this.b * complex.b), (this.b * complex.a + this.a * complex.b));
  }

  div(complex) {
    return new ComplexNumber((this.a * complex.a + this.b * complex.b)/(complex.a ** 2 + complex.b ** 2), (this.b * complex.a - this.a * complex.b)/(complex.a ** 2 + complex.b ** 2));
  }
}