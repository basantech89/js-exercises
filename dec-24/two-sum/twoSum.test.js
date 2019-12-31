import twoSum from './twoSums';

describe('twoSums', () => {
  test('should returns indices of two number that add up to targt', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
});
