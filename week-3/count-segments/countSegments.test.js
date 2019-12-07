import countSegments from './countSegments';

describe('count-segments', () => {
  test('should give correct output', () => {
    expect(countSegments('Hello, my name is John')).toEqual(5);
  });
});
