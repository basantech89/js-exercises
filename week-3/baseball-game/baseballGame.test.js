import { calPoints } from './baseballGame';

describe('baseball-game', () => {
  test('return the sum of the points you could get in all the rounds', () => {
    expect(calPoints(['5', '2', 'C', 'D', '+'])).toBe(30);
    expect(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27);
  });
});
