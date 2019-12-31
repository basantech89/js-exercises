import mySqrt from './sqrt';

describe('mySqrt', () => {
  it('should return truncated square root of a number', () => {
    expect(mySqrt(4)).toBe(2);
    expect(mySqrt(8)).toBe(2);
  });
});
