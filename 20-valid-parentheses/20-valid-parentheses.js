/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  const array = [];
  
  for (let i = 0; i < s.length; i += 1) {
    const top = array[array.length - 1];
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      array.push(s[i]);
    } else if (s[i] === ')' && top === '(' && array.length !== 0) {
      array.pop();
    } else if (s[i] === ']' && top === '[' && array.length !== 0) {
      array.pop();
    } else if (s[i] === '}' && top === '{' && array.length !== 0) {
      array.pop();
    } else {
      return false;
    }
  }
  return array.length === 0;
};