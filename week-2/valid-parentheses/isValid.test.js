import isValid from './isValid';

describe('valid-parentheses', () => {
  it('should check string for valid parentheses', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('(]')).toBe(false);
    expect(isValid('([)]')).toBe(false);
    expect(isValid('{[]}')).toBe(true);
  });
});
