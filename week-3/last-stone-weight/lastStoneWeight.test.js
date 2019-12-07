import lastStoneWeight from './lastStoneWeight';

describe('last-stone-weight', () => {
  test('should give correct output', () => {
    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toEqual(1);
  });
});
