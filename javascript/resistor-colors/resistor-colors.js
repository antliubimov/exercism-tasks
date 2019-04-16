const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white'];

export const value = (color) => {
  let result = '';
  color.forEach(element => {
    result += COLORS.indexOf(element);
  });
  return Number(result);
}