/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function (n) {
  const powerOfFive = Math.trunc(Math.log(n) / Math.log(5));
  let zeros = 0;
  for (let i = 1; i <= powerOfFive; i++) {
    zeros += Math.trunc(n / 5 ** i);
  }
  return zeros;
};
// var trailingZeroes = n => n < 5 ? 0 : Math.floor(n/5) + trailingZeroes(n/5);

export default trailingZeroes;
