function reverseList(head: ListNode | null): ListNode | null {
    let prev = null, curr = head, next = null;

    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};