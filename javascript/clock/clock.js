 export const at = (hour, minutes) => {

  const clock = {
    hour,
    minutes: minutes || 0
  }

  function formatTime(numb) {
    const timeStr = new String(numb);
    return (timeStr.length === 1) ? `0${timeStr}` : timeStr;
  }

  function resTime() {
    let diffMin = 0;
    let diffHour = 0;

    if (clock.minutes < 0) {
      diffMin = Math.ceil(Math.abs(clock.minutes) / 60);
      clock.minutes = diffMin * 60 + clock.minutes;
      clock.hour -= diffMin;
    } else if ( clock.minutes >= 60) {
      diffMin = Math.floor(Math.abs(clock.minutes) / 60);
      clock.minutes = clock.minutes - diffMin * 60;
      clock.hour += diffMin;
    }

    if (clock.hour < 0) {
      diffHour = Math.ceil(Math.abs(clock.hour) / 24);
      clock.hour = diffHour * 24 + clock.hour;
    } else if (clock.hour >= 24) {
      diffHour = Math.floor(Math.abs(clock.hour) / 24);
      clock.hour = clock.hour - diffHour * 24;
    }
  }

  resTime();

  return {
    clock,
    toString: () => { return `${formatTime(clock.hour)}:${formatTime(clock.minutes)}`},
    plus: function (minutes) {clock.minutes += minutes; resTime(); return this },
    minus: function (minutes) {clock.minutes -= minutes; resTime(); return this },
    equals: otherClock => (
      clock.hour === otherClock.clock.hour && clock.minutes === otherClock.clock.minutes
    )
  }
}