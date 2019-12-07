import bitwiseComplement from './bitwiseComplement';

describe('bitwise-complement', () => {
  test('should give correct output', () => {
    expect(bitwiseComplement(5)).toBe(2);
    expect(bitwiseComplement(7)).toBe(0);
    expect(bitwiseComplement(10)).toBe(5);
  });
});
