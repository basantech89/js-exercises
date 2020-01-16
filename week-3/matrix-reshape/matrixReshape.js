/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const flat = (items, flatten) => {
  for (const item of items) {
    if (Array.isArray(item)) {
      flat(item, flatten);
    } else {
      flatten.push(item);
    }
  }
  return flatten;
};

const matrixReshape = function (nums, r, c) {
  const rows = nums.length;
  const cols = nums[0].length;
  const reshaped = []; let newRow = [];
  if (rows * cols !== r * c) {
    return nums;
  }
  nums = flat(nums, []);
  let k = 0;
  for (let i = 0; i < r; i++) {
    newRow = [];
    for (let j = 0; j < c; j++) {
      newRow.push(nums[k]);
      k += 1;
    }
    reshaped.push(newRow);
  }
  return reshaped;
};

export default matrixReshape;
