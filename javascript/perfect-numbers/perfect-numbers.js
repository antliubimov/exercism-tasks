export const classify = (num) => {
  if (num < 1) {
    throw new Error('Classification is only possible for natural numbers.');
  }
  const halfNum = num / 2;
  let divide = 1;
  let result = 0;
  while (divide <= halfNum) {
    if (num % divide === 0) {
      result += divide;
    }
    divide += 1;
  }
  if (result === num) {
    return 'perfect';
  }
  if (result > num) {
    return 'abundant';
  }
  if (result < num) {
    return 'deficient';
  }
}