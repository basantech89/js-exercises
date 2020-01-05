/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
const postorder = function (root) {
  if (!root) return [];
  const stack = [root]; const nodes = [];
  let node;
  while (stack.length > 0) {
    node = stack[stack.length - 1];
    nodes.unshift(node.val);
    if (node.children) {
      stack.splice(stack.length - 1, 1, ...node.children);
    } else {
      stack.splice(stack.length - 1, 1);
    }
  }
  return nodes;
};

export default postorder;
