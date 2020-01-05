/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
  if (nums.length === 1) return nums[0];
  let sum = 0; let maxSum = -Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    for (let j = i; j < k + i; j++) {
      sum += nums[j];
    }
    if (sum > maxSum) {
      maxSum = sum;
    }
    sum = 0;
  }
  return maxSum / k;
};

export default findMaxAverage;
