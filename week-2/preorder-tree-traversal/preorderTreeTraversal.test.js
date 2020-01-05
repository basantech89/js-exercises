import preorder from './preorderTreeTraversal';

describe('preorder', () => {
  it('should return the preorder traversal of its nodes\' values.', () => {
    function Node(val) {
      this.val = val;
      this.children = [];
    }
    Node.prototype.addChildren = function (children) {
      this.children = children;
    };
    const root1 = new Node(1);
    const child1 = new Node(3);
    const child2 = new Node(2);
    const child3 = new Node(4);
    const child4 = new Node(5);
    const child5 = new Node(6);
    root1.addChildren([child1, child2, child3]);
    child1.addChildren([child4, child5]);
    expect(preorder(root1)).toEqual([1, 3, 5, 6, 2, 4]);

    const root2 = new Node(1);
    const child22 = new Node(2);
    const child23 = new Node(3);
    const child24 = new Node(4);
    const child25 = new Node(5);
    const child26 = new Node(6);
    const child27 = new Node(7);
    const child28 = new Node(8);
    const child29 = new Node(9);
    const child30 = new Node(10);
    const child31 = new Node(11);
    const child32 = new Node(12);
    const child33 = new Node(13);
    const child34 = new Node(14);
    root2.addChildren([child22, child23, child24, child25]);
    child23.addChildren([child26, child27]);
    child25.addChildren([child29, child30]);
    child24.addChildren([child28]);
    child27.addChildren([child31]);
    child28.addChildren([child32]);
    child29.addChildren([child33]);
    child31.addChildren([child34]);
    expect(preorder(root2)).toEqual([1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10]);
  });
});
