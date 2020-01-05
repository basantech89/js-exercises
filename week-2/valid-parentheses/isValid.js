/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const opens = ['{', '[', '('];
  const closes = ['}', ']', ')'];
  const validParen = (s, stack) => {
    let i = 0; let j = -1;
    while (j <= -1) {
      j = closes.indexOf(s[i]);
      if (j >= 0) {
        if (opens.indexOf(stack[stack.length - 1]) !== j) {
          return false;
        }
        stack.pop();
        return validParen(s.substring(i + 1), stack);
      }
      if (s.length <= 0) return true;
      stack.push(s[i]);
      i += 1;
    }
  };
  return validParen(s, []);
};

export default isValid;
