/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  return nums.reduce((result, num) => num ^ result, 0);
};

export default singleNumber;
