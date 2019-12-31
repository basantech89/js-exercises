/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const sign = Math.sign(x);
  const num = Math.abs(x).toString(10);
  let result = 0;
  for (const index in num) {
    result += num[index] * 10 ** (index);
  }
  if (result > 2 ** 31 - 1) {
    return 0;
  }
  return result * sign;
};

export default reverse;
