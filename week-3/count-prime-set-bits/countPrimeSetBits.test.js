import countPrimeSetBits from './countPrimeSetBits';

describe('count-prime-set-bits', () => {
  test('find the count of numbers in the range [L, R] having a prime number of set bits in their binary representation', () => {
    expect(countPrimeSetBits(6, 10)).toBe(4);
    expect(countPrimeSetBits(10, 15)).toBe(5);
  });
});
