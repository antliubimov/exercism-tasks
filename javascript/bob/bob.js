/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
export const hey = (message) => {

  const question = /\?[ ]*$/g;
  const wAnything = /^[\s]*$/g;
  let answer = '';

  if (message.toUpperCase() === message && message.toLowerCase() !== message && !message.match(question)) {
    // He answers 'Whoa, chill out!' if you yell at him.
    answer = 'Whoa, chill out!';
  } else if (message.toUpperCase() === message && message.toLowerCase() !== message && message.match(question)) {
    // He answers 'Calm down, I know what I'm doing!' if you yell a question at him.
    answer = 'Calm down, I know what I\'m doing!';
  } else if (message.match(question)) {
    // Bob answers 'Sure.' if you ask him a question.
    answer = 'Sure.';
  } else if (message.match(wAnything)) {
    // He says 'Fine. Be that way!' if you address him without actually saying anything.
    answer = 'Fine. Be that way!';
  } else {
    // He answers 'Whatever.' to anything else.
    answer = 'Whatever.';
  }
  return answer;
};