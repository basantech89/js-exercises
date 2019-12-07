import groupThePeople from './groupThePeople';

describe('group-the-people', () => {
  test('should give correct output', () => {
    expect(groupThePeople([3, 3, 3, 3, 3, 1, 3])).toEqual([[5], [0, 1, 2], [3, 4, 6]]);
    expect(groupThePeople([2, 1, 3, 3, 3, 2])).toEqual([[1], [0, 5], [2, 3, 4]]);
  });
});
