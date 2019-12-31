const maximumSubArray = (nums) => {
  let maxSumSoFar = nums[0]; let arraySum = 0;
  let i = 0;
  while (i < nums.length) {
    const num = nums[i];
    if (num > arraySum && arraySum < 0) {
      arraySum = num;
    } else {
      arraySum += num;
    }
    maxSumSoFar = Math.max(maxSumSoFar, num, arraySum);
    i += 1;
  }
  return maxSumSoFar;
};

export default maximumSubArray;
