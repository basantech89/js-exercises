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
var isBalanced = function(root) {
  const findDepth = root => root ? 1 + Math.max(findDepth(root.left), findDepth(root.right)) : 0;
  const traverse = root => {
    if (!root) return true;
    const leftTreeH = findDepth(root.left);
    const rightTreeH = findDepth(root.right);
    return Math.abs(leftTreeH - rightTreeH) <= 1 ? traverse(root.left) && traverse(root.right) : false
  };
  return traverse(root);
};

export default isBalanced;
