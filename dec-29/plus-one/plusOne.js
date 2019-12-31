/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  let carry = 0;
  const plusDigit = (numbers, i) => {
    numbers[i] += carry;
    if (numbers[i] <= 9) {
      return numbers;
    }
    if (i === -1) {
      numbers.unshift(carry);
      return numbers;
    }
    carry = Math.trunc(numbers[i] / 10);
    numbers[i] = numbers[i] % 10;
    return plusDigit(numbers, i - 1, carry);
  };
  digits[digits.length - 1] += 1;
  return plusDigit(digits, digits.length - 1);
};

export default plusOne;
