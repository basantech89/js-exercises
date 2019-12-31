import climbStairs from './climbingStairs';

describe('climbStairs', () => {
  it('should return in how many distinct ways can you climb to the top', () => {
    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(44)).toBe(1134903170);
  });
});
