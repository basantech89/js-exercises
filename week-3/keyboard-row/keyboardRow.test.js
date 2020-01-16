import findWords from './keyboardRow';

describe('keyboard-row', () => {
  test('should give correct output', () => {
    expect(findWords(['Hello', 'Alaska', 'Dad', 'Peace'])).toEqual(['Alaska', 'Dad']);
  });
});
