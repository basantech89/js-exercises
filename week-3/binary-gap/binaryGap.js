/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
  const binaryN = N.toString(2);
  let longestLen = 0;
  let i = 0;
  let j = 1;
  let second;
  while (i < binaryN.length && j < binaryN.length) {
    second = binaryN[j];
    if (second === '1') {
      if (j - i > longestLen) {
        longestLen = j - i;
      }
      i = j;
    }
    j += 1;

  };
  return longestLen;
};

export default binaryGap;
