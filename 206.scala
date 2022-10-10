object Solution {
    def reverse(node: ListNode): ListNode = {
        node match {
            case null => node
            case _ => {
                reverse(node.next) match {
                    case null => node
                    case nextNode => {
                        node.next.next = node
                        node.next = null
                        nextNode
                    }
                }
            }
        }
    }

    def reverseList(head: ListNode): ListNode = {
        reverse(head)
    }
}