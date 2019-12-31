/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '';
  let common = '';
  let commonSoFar = '';
  let i = 0;
  while (true) {
    common = '';
    for (const str of strs) {
      if (i === str.length) {
        return commonSoFar;
      }
      if (!common.includes(str[i])) {
        common += str[i];
      }
    }
    if (common.length > 1) {
      return commonSoFar;
    }
    commonSoFar += common;

    i += 1;
  }
  return commonSoFar;
};

export default longestCommonPrefix;
