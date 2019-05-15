export const Palindromes = {

  isPalindrome: num => {
    return String(num).split('').reverse().join('') === String(num);
  },

  createPalindrome: (value, factors) => {
    return {
      value: value,
      factors: factors
    }
  },

  generate: (options) => {
    let min = (options.minFactor) ? options.minFactor : 1;
    let max = (options.maxFactor) ? options.maxFactor : 1;

    if (min > max) {
      throw new Error('min must be <= max');
    }

    let palindromes = {
      smallest: {value: null, factors: []},
      largest: {value: null, factors: []}
    };

    for (let i = min; i <= max; i += 1) {
      for (let j = i; j <= max; j += 1) {
        let value = i * j;
        if (Palindromes.isPalindrome(value)) {
          if (palindromes.smallest.value === null) {
            palindromes.smallest = Palindromes.createPalindrome(value, [[i, j]]);
            palindromes.largest = Palindromes.createPalindrome(value, [[i, j]]);
          } else if (palindromes.smallest.value !== null) {
            if (value === palindromes.smallest.value) {
              palindromes.smallest.factors.push([i, j]);
            } else if (value === palindromes.largest.value) {
              palindromes.largest.factors.push([i, j]);
            } else if (value > palindromes.largest.value) {
              palindromes.largest = Palindromes.createPalindrome(value, [[i, j]]);
            }
          }
        }
      }
    }
    return palindromes;
  }
}