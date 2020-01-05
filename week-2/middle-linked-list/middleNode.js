/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
  const vals = [];
  let node = head;
  while (node) {
    vals.push(node);
    node = node.next;
  }
  return vals[parseInt(vals.length / 2)];
};

export default middleNode;
