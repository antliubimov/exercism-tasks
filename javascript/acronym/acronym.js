export const parse = (str) => {
  const regEx = /[A-Za-z']+/g;
  let arr = str.match(regEx);
  let acronym = arr.reduce((acc, elem) => acc += elem[0].toUpperCase(), '');
  return acronym;
}