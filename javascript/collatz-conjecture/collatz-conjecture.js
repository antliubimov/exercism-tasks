export const steps = (num) => {
  let count = 0;
  if (num <= 0) {
    throw new Error('Only positive numbers are allowed')
  }
  while (num !== 1) {
    (num % 2 === 0) ? (num = num / 2) : (num = 3 * num + 1);
    count += 1;
  }
  return count;
}