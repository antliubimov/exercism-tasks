export const isPangram = (str) => {
  const a = 97;
  const z = 122;
  const lowerStr = str.toLowerCase();
  for (let i = a; i <= z; i += 1) {
    if (lowerStr.indexOf(String.fromCharCode(i)) === -1){
      return false;
    }
  }
  return true;
}