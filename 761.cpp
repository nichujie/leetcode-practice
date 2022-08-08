#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
   public:
    bool isValid(string &s) {
        int sum = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s[i] == '1')
                sum++;
            else
                sum--;

            if (sum < 0) {
                return false;
            }
        }

        if (sum != 0) return false;

        return true;
    }

    string makeLargestSpecial(string s) {
        int n = s.length();

        bool improved = false;
        do {
            improved = false;
            int start = 1, mid = 1, end = 1;
            while (start <= n - 3) {
                mid = start + 1;
                while (mid <= n - 2) {
                    end = mid + 2;
                    while (end <= n) {
                        string s1 = s.substr(start - 1, mid - start + 1);
                        string s2 = s.substr(mid, end - mid);

                        if (isValid(s1) && isValid(s2)) {
                            if ((s1 + s2).compare(s2 + s1) < 0) {
                                s = s.substr(0, start - 1) + s2 + s1 + s.substr(end);
                                improved = true;
                            }
                        }
                        end += 2;
                    }
                    mid += 2;
                }
                start++;
            }
        } while (improved);

        return s;
    }
};

int main() {
    Solution s;
    string result = s.makeLargestSpecial("1010101100");
    cout << result << endl;

    return 0;
}