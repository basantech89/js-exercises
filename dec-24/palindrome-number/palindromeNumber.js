/**
 *  * @param {number} x
 *   * @return {boolean}
 *    */
const isPalindrome = function (x) {
  const strX = x.toString(10);
  let reversed = 0;
  for (const index in strX) {
    reversed += strX[index] * 10 ** index;
  }
  return reversed === x;
};

export default isPalindrome;
