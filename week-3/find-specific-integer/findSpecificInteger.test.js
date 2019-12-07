import findSpecialInteger from './findSpecificInteger';

describe('find-specific integer', () => {
  test('should give correct output', () => {
    expect(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])).toEqual(6);
  });
});
