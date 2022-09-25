/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry = 0, sum = 0;
    let prev = new ListNode();
    let curr = prev;

    while (l1 != null || l2 != null) {
        let v1 = l1 === null ? 0 : l1.val;
        let v2 = l2 === null ? 0 : l2.val;
        sum = (v1 + v2 + carry) % 10
        carry = Math.floor((v1 + v2 + carry) / 10)
        curr.next = new ListNode(sum, null);
        curr = curr.next

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    if (carry > 0) {
        curr.next = new ListNode(carry, null);
    }

    return prev.next;
};