import postorder from "./postorderTreeTraversal";

describe('postorder', () => {
  it('should return the postorder traversal of its nodes\' values.', () => {
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
    expect(postorder(root1)).toEqual([5, 6, 3, 2, 4, 1]);

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
    expect(postorder(root2)).toEqual([2, 6, 14, 11, 7, 3, 12, 8, 4, 13, 9, 10, 5, 1]);
  });
});
