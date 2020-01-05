/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  const term = '1';
  if (n === 1) return term;
  const say = (term, num) => {
    let i = 0; const len = term.length - 1;
    while (i < len) {
      if (term[i] !== term[i + 1]) {
        term = say(term.substring(0, i + 1), n) + say(term.substring(i + 1), n);
        i = term.length;
      }
      i += 1;
    }
    if (i === term.length - 1) {
      term = term.length + term[0];
    }
    if (num >= n - 1) {
      return term;
    }
    return say(term, num + 1);
  };
  return say(term, 1);
};

export default countAndSay;
