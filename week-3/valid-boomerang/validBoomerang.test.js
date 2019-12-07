import isBoomerang from './validBoomerang';

describe('valid-boomerang', () => {
  test('should give correct output', () => {
    expect(isBoomerang([[1, 1], [2, 3], [3, 2]])).toBe(true);
  });
});
