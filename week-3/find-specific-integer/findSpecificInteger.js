/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  if (arr.length <= 1) return arr[0];
  let count = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      count = 1;
    } else {
      count += 1;
    }
    if (count > Math.ceil(arr.length / 4)) {
      return arr[i];
    }
  }
};

export default findSpecialInteger;
