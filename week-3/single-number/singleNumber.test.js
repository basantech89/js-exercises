import singleNumber from './singleNumber';

describe('single-number', () => {
  test('should give correct output', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });
});
