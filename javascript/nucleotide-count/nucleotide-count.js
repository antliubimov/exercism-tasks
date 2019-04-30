export let NucleotideCounts = {};

Object.prototype.parse = function(str) {
  let result = [0, 0, 0, 0];
  const nucleotide = ['A', 'C', 'G', 'T'];
  const regExp = /[^ACGT]/g;
  if (regExp.test(str)) {
    throw new Error('Invalid nucleotide in strand');
  }
  for (let i = 0; i < nucleotide.length; i += 1) {
    let count = 0;
    let idx = str.indexOf(nucleotide[i]);
    while (idx !== -1) {
      count += 1;
      idx = str.indexOf(nucleotide[i], idx + 1);
    }
    result[i] = count;
  }

  return result.join(' ');
}