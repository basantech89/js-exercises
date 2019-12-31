import plusOne from './plusOne';

describe('plusOne', () => {
  it('should add one to last number of numbers array', () => {
    expect(plusOne([8, 9, 9])).toEqual([9, 0, 0]);
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);
    // expect(plusOne([9, 9])).toEqual([1, 0, 0]);
  });
});
