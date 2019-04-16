export const meetupDay = (year, month, weekday, desc) => {
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const description = {
    1: '1st',
    2: '2nd',
    3: '3rd',
    4: '4th',
    5: '5th',
    last: 'last',
    teenth: 'teenth'
  }
  let firstDate = new Date(year, month);
  let firstMonthDay = firstDate.getDay();
  let diffDays = firstMonthDay - week.indexOf(weekday);
  let neededDay = 0;
  if (diffDays > 0) {
    neededDay = 8 - diffDays;
  } else if (diffDays < 0) {
    neededDay = 1 - diffDays;
  } else {
    neededDay = 1;
  }

  let countDay = 0;
  for (let key in description) {
    if (description[key] === desc) {
      if (key === 'last') {
        countDay = neededDay + 28;
        let tmpDate = new Date(year, month, countDay);
        if (tmpDate.getMonth() !== month) {
          countDay -= 7;
        }
      } else if (key === 'teenth') {
        countDay = neededDay;
        while (countDay < 12 && countDay < 20) {
          countDay += 7;
        }
      } else {
        countDay = neededDay + (key - 1) * 7;
        let tmpDate = new Date(year, month, countDay);
        if (tmpDate.getMonth() !== month) {
          throw new Error();
        }
      }
    }
  }
  return new Date(year, month, countDay);
}