const isPrime = (number) => {
  let currentNumber = 2;
  while (currentNumber < number) {
    if (number % currentNumber === 0) {
      return false;
    }
    currentNumber += 1;
  }
  return true;
};

function sumPrimes(number) {
  let currentNumber = 2;
  let sum = 0;
  while (currentNumber <= number) {
    if (isPrime(currentNumber)) {
      sum += currentNumber;
    }
    currentNumber += 1;
  }
  return sum;
}

export {
  sumPrimes,
};
