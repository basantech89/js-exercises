/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const isPrime = num => {
  if (num === 2) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return true;
};

var countPrimeSetBits = function(L, R) {
  let ones = 0;
  let binaryNum;
  let setBits = 0;
  for (let i = L; i <= R; i++) {
    binaryNum = i.toString(2);
    ones = 0;
    for (const digit of binaryNum) {
      if (digit === '1') {
        ones += 1;
      }
    }
    setBits = isPrime(ones) ? setBits + 1 : setBits + 0;
  };
  return setBits;
};

export default countPrimeSetBits;
