/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.items = [];
  this.min = Infinity;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.items.push(x);
  if (x < this.min) {
    this.min = x;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.items.length !== 0) {
    const x = this.items.pop();
    if (x === this.min) {
      this.min = Math.min(...this.items);
    }
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.items.length === 0) return null;
  return this.items[this.items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

export default MinStack;
