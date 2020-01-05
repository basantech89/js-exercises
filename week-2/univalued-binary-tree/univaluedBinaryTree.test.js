import isUnivalTree from './univaluedBinaryTree';

describe('isUnivalTree', () => {
  it('should Return true if and only if the given tree is univalued', () => {
    function TreeNode(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
    TreeNode.prototype.addChildren = function (left, right) {
      this.left = left;
      this.right = right;
    };
    const root1 = new TreeNode(1);
    const root1Left = new TreeNode(1);
    const root1Right = new TreeNode(1);
    root1.addChildren(root1Left, root1Right);
    root1Left.addChildren(new TreeNode(1), new TreeNode(1));
    root1Right.addChildren(null, new TreeNode(1));
    expect(isUnivalTree(root1)).toBeTruthy();

    const root2 = new TreeNode(2);
    const root2Left = new TreeNode(2);
    const root2Right = new TreeNode(2);
    root2.addChildren(root2Left, root2Right);
    root2Left.addChildren(new TreeNode(5), new TreeNode(2));
    expect(isUnivalTree(root2)).toBeFalsy();
  });
});
