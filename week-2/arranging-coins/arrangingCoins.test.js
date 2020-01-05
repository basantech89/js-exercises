import arrangeCoins from './arrangingCoins';

describe('arranging-coins', () => {
  it('should return the total number of full staircase rows that can be formed.', () => {
    expect(arrangeCoins(5)).toBe(2);
    expect(arrangeCoins(8)).toBe(3);
    expect(arrangeCoins(0)).toBe(0);
    expect(arrangeCoins(1)).toBe(1);
  });
});
