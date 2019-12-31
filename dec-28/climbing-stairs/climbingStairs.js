/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const memo = [];
  const climb = (n, stepSize, steps) => {
    const remainingSteps = n - stepSize;
    if (remainingSteps === 0) {
      steps += 1;
      return steps;
    } else if (remainingSteps === 1) {
      return climb(remainingSteps, 1, steps);
    } else {
      if (memo[remainingSteps]) {
        return memo[remainingSteps];
      } else {
        memo[remainingSteps] = climb(remainingSteps, 1, steps) + climb(remainingSteps, 2, steps);
        return memo[remainingSteps];
      }
    }
  };
  if (n <= 1) {
    return climb(n, 1, 0, n);
  } else if (n > 1) {
    return climb(n, 1, 0, n) + climb(n, 2, 0, n);
  }
};

export default climbStairs;
