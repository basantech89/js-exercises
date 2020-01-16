/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  const validPoints = [];
  let sum = 0; let thisSum = 0;
  for (const type of ops) {
    if (type === '+') {
      thisSum = 0;
      for (let i = validPoints.length - 1; i > validPoints.length - 3; i--) {
        thisSum += validPoints[i];
      }
      validPoints.push(thisSum);
      sum += thisSum;
    } else if (type === 'D') {
      sum += 2 * validPoints[validPoints.length - 1];
      validPoints.push(2 * validPoints[validPoints.length - 1]);
    } else if (type === 'C') {
      sum -= validPoints[validPoints.length - 1];
      validPoints.splice(validPoints.length - 1, 1);
    } else {
      sum += parseInt(type, 10);
      validPoints.push(parseInt(type, 10));
    }
  }
  return sum;
};

export { calPoints };
