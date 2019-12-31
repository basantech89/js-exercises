import reverse from './reverseInteger';

describe('reverse', () => {
  test('should return reverse digits of an integer', () => {
    expect(reverse(123)).toBe(321);
    expect(reverse(-123)).toBe(-321);
    expect(reverse(120)).toBe(21);
  });
});
