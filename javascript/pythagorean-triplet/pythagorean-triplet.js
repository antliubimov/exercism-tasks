export class Triplet {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  product() {
    return this.a * this.b * this.c;
  }

  isPythagorean() {
    return ((this.a**2 + this.b**2) === this.c**2);
  }

  static where(obj) {
    const minFac = (obj['minFactor']) ? obj['minFactor'] : 3;
    const maxFac = obj['maxFactor'];
    const sum = (obj['sum']) ? obj['sum'] : 0;

    let triplets = [];
    for (let a = minFac; a < maxFac; a += 1) {
      for (let b = minFac; b < maxFac; b += 1) {
        for (let c = minFac; c <= maxFac; c += 1) {
          if (a % 3 === 0 || b % 3 === 0) {
            if (a % 4 === 0 || b % 4 === 0) {
              if (a % 5 === 0 || b % 5 === 0 || c % 5 === 0) {
                if (a < b && b < c) {
                  let triplet = new Triplet(a, b, c);
                  if (triplet.isPythagorean()) {
                    if (sum !== 0) {
                      if (triplet.sum() === sum) {
                        triplets.push(triplet);
                      }
                    } else {
                      triplets.push(triplet);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return triplets;
  }
}