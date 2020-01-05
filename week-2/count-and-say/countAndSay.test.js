import countAndSay from './countAndSay';

describe('count-and-say', () => {
  it('should generate nth term of count and say sequence', () => {
    expect(countAndSay(1)).toBe('1');
    expect(countAndSay(2)).toBe('11');
    expect(countAndSay(5)).toBe('111221');
    expect(countAndSay(7)).toBe('13112221');
    expect(countAndSay(10)).toBe('13211311123113112211');
  });
});
