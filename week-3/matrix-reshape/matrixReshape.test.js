import matrixReshape from './matrixReshape';

describe('matrix-reshape', () => {
  test('should give correct output', () => {
    expect(matrixReshape([[1, 2], [3, 4]], 1, 4)).toEqual([[1, 2, 3, 4]]);
  });
});
