import longestCommonPrefix from './longestCommonPrefix';

describe('longestCommonPrefix', () => {
  it('should return longest common prefix', () => {
    expect(longestCommonPrefix(['aa', 'a'])).toBe('a');
    expect(longestCommonPrefix([])).toBe('');
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  });
});
