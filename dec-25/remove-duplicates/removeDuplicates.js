const removeDuplicates = function (nums) {
  let i = 0; let j = 1;
  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i += 1;
      nums[i] = nums[j];
    }
    j += 1;
  }
  return i + 1;
};

export default removeDuplicates;
