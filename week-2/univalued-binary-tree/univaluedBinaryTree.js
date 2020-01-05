/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isUnivalTree = function (root) {
  const nodes = [root]; const { val } = root;
  while (nodes.length > 0) {
    const node = nodes[0];
    if (node.left) {
      nodes.push(node.left);
    }
    if (node.right) {
      nodes.push(node.right);
    }
    if (node.val !== val) {
      return false;
    }
    nodes.splice(0, 1);
  }
  return true;
};

export default isUnivalTree;
