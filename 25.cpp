/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
#include <stack>

class Solution {
   public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        stack<ListNode*> s;
        ListNode *newHead = nullptr, *currentHead = head, *currentTail = nullptr;

        while (head) {
            s.push(head);
            head = head->next;
            if (s.size() == k) {
                currentHead = head;  // Record head of remaining list

                ListNode* node = s.top();
                s.pop();
                if (newHead == nullptr) {
                    newHead = node;
                } else {
                    currentTail->next = node;
                }

                while (!s.empty()) {
                    node->next = s.top();
                    s.pop();
                    node = node->next;
                }
                currentTail = node;
            }
        }

        if (s.size() > 0) {
            if (newHead) {
                currentTail->next = currentHead;
            } else {
                newHead = head;
            }
        } else if (currentTail)
            currentTail->next = nullptr;

        return newHead;
    }
};