import { alienAlphabet } from './alienAlphabet';

describe('alienAlphabet', () => {
  it('works for single character words', () => {
    expect(alienAlphabet(['c', 'b', 'a'])).toEqual(['c', 'b', 'a']);
  });

  it('works when letters are out of order in subsequent slots', () => {
    expect(alienAlphabet(['c', 'bc', 'bb'])).toEqual(['c', 'b']);
  });

  it('works', () => {
    expect(alienAlphabet(['car', 'cat', 'bar', 'abc'])).toEqual(['c', 'b', 'a', 'r', 't']);
  });
});
