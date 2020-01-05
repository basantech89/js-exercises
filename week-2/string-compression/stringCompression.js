/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function (chars) {
  let count = 1; let i = 0; let j = 1;
  while (i < chars.length - 1) {
    if (chars[i] !== chars[j] && count !== 1) {
      chars.splice(i + 1, count - 1, ...count.toString().split(''));
      count = 1;
      i += 2;
      j = i;
    } else if (chars[i] === chars[j]) {
      count += 1;
    } else {
      i += 1;
      j = i;
    }
    j += 1;
  }
  return chars.length;
};

export default compress;
