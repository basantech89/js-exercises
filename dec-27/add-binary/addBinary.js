/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  let addition = '';
  let carry = 0;
  const maxLen = Math.max(a.length, b.length);
  let i = maxLen - 1;
  if (a.length < b.length) {
    a = '0'.repeat(b.length - a.length) + a;
  } else if (a.length > b.length) {
    b = '0'.repeat(a.length - b.length) + b;
  }
  while (i >= 0) {
    const sum = Number(a[i]) + Number(b[i]) + carry;
    if (sum === 2) {
      addition = `0${addition}`;
      carry = 1;
    } else if (sum === 3) {
      addition = `1${addition}`;
      carry = 1;
    } else {
      addition = sum + addition;
      carry = 0;
    }
    i -= 1;
  }
  return carry === 0 ? addition : carry + addition;
};

export default addBinary;
