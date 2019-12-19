
function objectAssign(target, ...sources) {
  sources.forEach((source) => {
    if (source) {
      const keys = Object.keys(source);
      keys.forEach((key) => {
        // eslint-disable-next-line no-param-reassign
        target[key] = source[key];
      });
    }
  });
  return target;
}

export {
  objectAssign,
};
