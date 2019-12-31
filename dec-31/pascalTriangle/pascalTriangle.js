/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (numRows) => {
  if (numRows === 0) return [];
  let i = 1; const triangle = [[1]];
  while (i < numRows) {
    const row = []; const prev = triangle[i - 1];
    for (let j = 0; j <= prev.length; j++) {
      let num;
      if (j === prev.length) {
        num = prev[j - 1];
      } else {
        num = prev[j];
      }
      if (j === 0 || j === prev.length) {
        row.push(num);
      } else {
        row.push(num + prev[j - 1]);
      }
    }
    triangle.push(row);
    i += 1;
  }
  return triangle;
};

export default generate;
