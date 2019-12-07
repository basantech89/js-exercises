/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
  const groups = {}; let group;
  for (let i = 0; i < groupSizes.length; i++) {
    if (groupSizes[i] in groups) {
      for (let j = 0; j < groups[groupSizes[i]].length; j++) {
        group = groups[groupSizes[i]][j];
        if (group.length < groupSizes[i]) {
          group.push(i);
          break;
        } else if (j === groups[groupSizes[i]].length - 1) {
          groups[groupSizes[i]].push([i]);
          break;
        }
      }
    } else {
      groups[groupSizes[i]] = [[i]];
    }
  }
  return Object.values(groups).reduce((groups, group) => {
    groups.push(...group);
    return groups;
  }, []);
};

export default groupThePeople;
