export const translate = (str) => {
  let result = [];
  let tmpArr = [];
  let resultItem = '';
  if (str === undefined) return result;
  for (let i = 0; i < str.length; i += 3) {
    tmpArr.push(str.slice(i, 3 + i));
  }
  for (let i = 0; i < tmpArr.length; i += 1) {
    switch (tmpArr[i]) {
      case 'AUG': resultItem = 'Methionine';
                   break;
      case 'UUU':
      case 'UUC': resultItem = 'Phenylalanine';
                   break;
      case 'UUA':
      case 'UUG': resultItem = 'Leucine';
                   break;
      case 'UCU':
      case 'UCC':
      case 'UCA':
      case 'UCG': resultItem = 'Serine';
                  break;
      case 'UAU':
      case 'UAC': resultItem = 'Tyrosine';
                  break;
      case 'UGU':
      case 'UGC': resultItem = 'Cysteine';
                  break;
      case 'UGG': resultItem = 'Tryptophan';
                  break;
      case 'UAA':
      case 'UAG':
      case 'UGA': resultItem = 'STOP';
                  break;
      default: throw new Error('Invalid codon');
    }
    if (resultItem === 'STOP') { break; };
    result.push(resultItem);
  };
  return result;
};