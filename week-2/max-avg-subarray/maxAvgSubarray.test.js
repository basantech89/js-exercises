import findMaxAverage from './maxAvgSubarray';

describe('maximum average subarray 1', () => {
  it('should find the contiguous sub-array with max average and return the average', () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
  });
});
