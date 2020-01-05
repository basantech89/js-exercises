import trailingZeroes from './factorialTrailingZeros';

describe('trailingZeros', () => {
  it('should return number of trailing zeros in n!', () => {
    expect(trailingZeroes(3)).toBe(0);
    expect(trailingZeroes(0)).toBe(0);
    expect(trailingZeroes(5)).toBe(1);
  });
});
