/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = (root) => (root ? 1 + Math.max(maxDepth(root.left), maxDepth(root.right)) : 0);

export default maxDepth;
