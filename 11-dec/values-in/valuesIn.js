/* eslint-disable guard-for-in */

function valuesIn(obj) {
  const values = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}

export {
  valuesIn,
};
