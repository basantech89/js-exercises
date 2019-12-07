import nextGreaterElement from './nextGreaterElement';

describe('next-greater-element', () => {
  test('should give correct output', () => {
    expect(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])).toEqual([-1, 3, -1]);
  });
});
