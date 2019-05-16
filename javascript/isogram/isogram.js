export const isIsogram = (words) => {
  let str = words.toLowerCase();
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== '-' && str[i] !== ' ') {
      let position = str.indexOf(str[i]);

      if (str.indexOf(str[i], position + 1) !== -1) {
        return false;
      }
    }
  }
  return true;
};
