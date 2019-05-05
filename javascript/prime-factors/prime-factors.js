export const primeFactors = (num) => {
  let result = [];
  let div = 2;
  while (num !== 1) {
    if (isPrime(div)) {
      if (num % div === 0) {
        num /= div;
        result.push(div);
        div = 2;
      } else {
        div += 1;
      }
    } else {
      div += 1;
    }
  }
  return result;
}

const isPrime = (num) => {
  if (num > 1) {
    const maxDiv = Math.round(Math.sqrt(num));
    if (maxDiv < 2) return true;
    let div = 2;
    while (div <= maxDiv) {
      if (num % div === 0) {
        return false;
      } else {
        div += 1;
      }
    }
    return true;
  }
}