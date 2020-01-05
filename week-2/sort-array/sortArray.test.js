import sortArray from './sortArray';

describe('sortArray', () => {
  it('should return the sorted array', () => {
    expect(sortArray([5, 2, 3, 1])).toEqual([1, 2, 3, 5]);
    expect(sortArray([2])).toEqual([2]);
  });
});
