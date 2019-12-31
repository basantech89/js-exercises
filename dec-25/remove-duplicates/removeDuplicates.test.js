import removeDuplicates from './removeDuplicates';

describe('removeDuplicates', () => {
  test('should remove duplicates', () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
  });
});
