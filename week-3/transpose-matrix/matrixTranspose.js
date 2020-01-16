/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const transpose = function (A) {
  const transposed = [];
  for (let i = 0; i < A[0].length; i++) {
    transposed.push([].fill(0, 0, A.length));
  }
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      transposed[j][i] = A[i][j];
    }
  }
  return transposed;
};

export default transpose;
