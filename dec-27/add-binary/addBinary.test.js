import addBinary from './addBinary';

describe('addBinary', () => {
  it('should add two binary numbers', () => {
    expect(addBinary('11', '1')).toBe('100');
    expect(addBinary('1010', '1011')).toBe('10101');
    expect(addBinary('1111', '1111')).toBe('11110');
    expect(addBinary('1', '111')).toBe('1000');
    expect(addBinary('1', '111')).toBe('1000');
    expect(addBinary('0', '0')).toBe('0');
    expect(addBinary('11', '1')).toBe('100');
  });
});
