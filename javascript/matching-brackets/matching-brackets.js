let brackets = {
  "[": "]",
  "{": "}",
  "(": ")"
};

export const matchingBrackets = (str) => {
  const vals = Object.keys(brackets).map(key => brackets[key]);
  const keys = Object.keys(brackets);

  if (vals.indexOf(str[0]) + 1) {
    return false;
  } else {
    let mass = str.split('');
    let stack = [];

    for (let i = 0; i < mass.length; i++) {
      const l = mass[i];
      if (keys.indexOf(l) + 1) {
        stack.push(l);
      } else if (vals.indexOf(l) === keys.indexOf(stack[stack.length - 1])) {
        stack.pop();
      } else {
        return false;
      }
      if (i + 1 === mass.length && stack.length !== 0) {
        return false;
      }
    }
    return true;
  }
}