/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
  const keyboard = [/^[qwertyuiop]+$/i, /^[asdfghjkl]+$/i, /^[zxcvbnm]+$/i];
  return words.filter((word) => keyboard.some((row) => row.test(word)));
};

export default findWords;
