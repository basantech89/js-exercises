/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
const preorder = function (root) {
  if (!root) return [];
  const queue = [root];
  let node; const nodes = [];
  while (queue.length > 0) {
    node = queue[0];
    nodes.push(node.val);
    if (node.children.length > 0) {
      queue.splice(0, 1, ...node.children);
    } else {
      queue.splice(0, 1);
    }
  }
  return nodes;
};

export default preorder;
