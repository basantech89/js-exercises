/**
 * @param {number} N
 * @return {number}
 */
const XOR = (num1, num2) => {
  let n1; let n2; let result = '';
  for (let i = 0; i < num1.length; i++) {
    n1 = num1[i];
    n2 = num2[i];
    if (n1 === n2) {
      result += 0;
    } else {
      result += 1;
    }
  }
  return result;
};
const bitwiseComplement = function (N) {
  const binaryN = N.toString(2);
  const complement = XOR(binaryN, '1'.repeat(binaryN.length));
  return parseInt(complement, 2);
};

export default bitwiseComplement;
