import compress from './stringCompression';

describe(('string-compression'), () => {
  it('should compress the array in place and return new length of array', () => {
    const input1 = ['a', 'a', 'b', 'b', 'c', 'c', 'c'];
    expect(compress(input1)).toBe(6);
    expect(input1).toEqual(['a', '2', 'b', '2', 'c', '3']);
    const input2 = ['a'];
    expect(compress(input2)).toBe(1);
    expect(input2).toEqual(['a']);
    const input3 = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
    expect(compress(input3)).toBe(4);
    expect(input3).toEqual(['a', 'b', '1', '2']);
  });
});
