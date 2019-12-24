import isPalindrome from './palindromeNumber';

describe('isPalindrome', () => {
  test('should check for palindrome', () => {
    expect(isPalindrome(121)).toBe(true);
    expect(isPalindrome(-121)).toBe(false);
    expect(isPalindrome(10)).toBe(false);
  });
});
