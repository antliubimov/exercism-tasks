export const transform = (obj) => {
  let tmpObj = {};
  for (let key in obj) {
    obj[key].forEach(x => {
      tmpObj[x.toLowerCase()] = +(key);
    });
  }
  return tmpObj;
}