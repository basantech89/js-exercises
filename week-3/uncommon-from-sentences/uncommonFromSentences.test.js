import uncommonFromSentences from './uncommonFromSentences';

describe('uncommon-from-sentences', () => {
  test('should give correct output', () => {
    expect(uncommonFromSentences('apple apple', 'banana')).toEqual(['banana']);
  });
});
