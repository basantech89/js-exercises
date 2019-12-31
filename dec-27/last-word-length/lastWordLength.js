/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  let index = s.length - 1;
  let count = 0;
  while (index >= 0) {
    if (s[index] !== ' ') {
      count += 1;
    } else if (s[index] === ' ' && count !== 0) {
      return count;
    }
    index -= 1;
  }
  return count;
};

export default lengthOfLastWord;
