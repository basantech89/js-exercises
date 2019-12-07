/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  let first; let second;
  const crushStones = stones => {
    if (stones.length <= 1) return stones;
    first = Math.max(...stones)
    stones.splice(stones.indexOf(first), 1);
    second = Math.max(...stones)
    stones.splice(stones.indexOf(second), 1);
    if (first !== second) {
      stones.push(first - second);
    }
    return crushStones(stones);
  };
  stones = crushStones(stones);
  return stones.length === 0 ? 0 : stones[0];
};

export default lastStoneWeight;
