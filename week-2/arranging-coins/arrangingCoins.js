/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  if (n <= 1) return n;
  for (let i = 1; i <= n; i++) {
    if (i * (i + 1) / 2 > n) {
      return i - 1;
    }
  }
};

export default arrangeCoins;
