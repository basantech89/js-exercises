import isBalanced from './isBalanced';

describe('balanced-binary-tree', () => {
  it('should given a binary tree, determine if it is height-balanced', () => {
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
    expect(isBalanced(root1)).toBeTruthy();

    const root2 = new TreeNode(1);
    const root2Left = new TreeNode(2);
    const root2Right = new TreeNode(2);
    root2.addChildren(root2Left, root2Right);
    const child21 = new TreeNode(3);
    const child22 = new TreeNode(3);
    const child23 = new TreeNode(4);
    const child24 = new TreeNode(4);
    root2Left.addChildren(child21, child22);
    child21.addChildren(child23, child24);
    expect(isBalanced(root2)).toBeFalsy();
  });
});
