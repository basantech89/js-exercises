/**
 * @param {string} s
 * @return {number}
 */
const countSegments = function (s) {
  return s.trim() ? s.trim().split(/\s+/).length : 0;
};

export default countSegments;
