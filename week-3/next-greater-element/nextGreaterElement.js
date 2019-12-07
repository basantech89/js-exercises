/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  return nums1.reduce((result, num1, idx) => {
    for (let j = nums2.indexOf(num1) + 1; j <= nums2.length; j++) {
      if (nums2[j] > num1) {
        result.push(nums2[j]);
        return result;
      } else if (j >= nums2.length - 1) {
        result.push(-1);
        return result;
      }
    }
  }, []);
};

export default nextGreaterElement;
