/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] >= target) {
      return i;
    }
    i += 1;
  }
  return nums.length;
};

export default searchInsert;
