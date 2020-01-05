import minDepth from './minDepth';

describe('Min depth of binary tree', () => {
  it('Given a binary tree, find its minimum depth', () => {
    function TreeNode(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
    TreeNode.prototype.addChildren = function (left, right) {
      this.left = left;
      this.right = right;
    };
    const root1 = new TreeNode(3);
    const root1Left = new TreeNode(9);
    const root1Right = new TreeNode(20);
    const child1 = new TreeNode(15);
    const child2 = new TreeNode(7);
    root1.addChildren(root1Left, root1Right);
    root1Right.addChildren(child1, child2);
    expect(minDepth(root1)).toBe(2);
  });
});
