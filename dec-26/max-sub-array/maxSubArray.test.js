import maximumSubArray from './maximumSubArray';

describe('maximumSubArray', () => {
  it('should find max contiguous sub array which has the largest sum', () => {
    expect(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
});
