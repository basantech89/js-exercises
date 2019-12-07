/**
 * @param {number[][]} points
 * @return {boolean}
 */
const findSlope = (pointA, pointB) => (pointB[1] - pointA[1]) / (pointB[0] - pointA[0]);
const areEqualPoints = (pointA, pointB) => pointB[1] === pointA[1] && pointB[0] === pointA[0];
var isBoomerang = function(points) {
  if (
    areEqualPoints(points[0], points[1]) ||
    areEqualPoints(points[1], points[2]) ||
    areEqualPoints(points[0], points[2])
  ) {
    return false;
  }
  const slope = findSlope(points[0], points[1]);
  return slope !== findSlope(points[1], points[2]);
};

export default isBoomerang;
