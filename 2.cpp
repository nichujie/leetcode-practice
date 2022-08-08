#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode* next) : val(x), next(next) {}
};

class Solution {
   public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *head = nullptr, *p = nullptr;
        int carry = 0, digit = 0;

        while (l1 || l2) {
            int v1 = l1 ? l1->val : 0;
            int v2 = l2 ? l2->val : 0;
            digit = (v1 + v2 + carry) % 10;
            carry = (v1 + v2 + carry) / 10;

            if (head == nullptr) {
                head = new ListNode(digit);
                p = head;
            } else {
                p->next = new ListNode(digit);
                p = p->next;
            }
            l1 = l1 ? l1->next : l1;
            l2 = l2 ? l2->next : l2;
        }

        if (carry) p->next = new ListNode(carry);

        return head;
    }
};

int main() {
    Solution s;
    ListNode* l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    ListNode* l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    ListNode* result = s.addTwoNumbers(l1, l2);

    while (result) {
        cout << result->val << " ";
        result = result->next;
    }
    cout << endl;

    return 0;
}