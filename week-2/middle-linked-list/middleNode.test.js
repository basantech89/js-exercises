import middleNode from './middleNode';

describe('Middle of Linked List', () => {
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  ListNode.prototype.addNext = function (node) {
    this.next = node;
  };
  const head = new ListNode(1);
  const node1 = new ListNode(2);
  const node2 = new ListNode(3);
  const node3 = new ListNode(4);
  const node4 = new ListNode(5);
  head.addNext(node1);
  node1.addNext(node2);
  node2.addNext(node3);
  node3.addNext(node4);
  test('Given a non-empty, singly linked list with head node head, return a middle node of linked list', () => {
    const node = middleNode(head);
    expect(node.val).toBe(3);
    expect(node.next.val).toBe(4);
    expect(node.next.next.val).toBe(5);
    expect(node.next.next.next).toBe(null);
    const node5 = new ListNode(6);

    node4.addNext(node5);
    const node6 = middleNode(head);
    expect(node6.val).toBe(4);
  });
});
