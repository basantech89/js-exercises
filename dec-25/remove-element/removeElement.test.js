import removeElement from './removeElement';

describe('removeElement', () => {
  test('should remove a target element from array', () => {
    const input = [3, 2, 2, 3];
    expect(removeElement(input, 3)).toBe(2);
  });
  test('should work for bigger arrays', () => {
    const input = [0, 1, 2, 2, 3, 0, 4, 2];
    expect(removeElement(input, 2)).toBe(5);
  });
});
