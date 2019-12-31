import generate from './pascalTriangle';

describe('generate', () => {
  it('should generate pascal\'s triangle', () => {
    expect(generate(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]]);
    expect(generate(0)).toEqual([]);
  });
});
