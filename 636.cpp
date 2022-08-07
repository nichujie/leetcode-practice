#include <iostream>
#include <vector>

using namespace std;

// ***** Solution Start *****
#include <sstream>
#include <stack>
#include <string>

class Solution {
    std::stack<int> events;

   public:
    vector<int> exclusiveTime(int n, vector<string>& logs) {
        vector<int> sum(n);
        int currentTime = -1;
        int id, timestamp;
        std::string type;

        for (vector<string>::iterator it = logs.begin(); it != logs.end(); it++) {
            string log = *it;
            for (size_t i = 0; i < log.size(); i++) {
                if (log[i] == ':') log[i] = ' ';
            }

            std::stringstream ss(log);
            ss >> id >> type >> timestamp;

            if (type == "start") {
                if (!events.empty()) {
                    sum[events.top()] += timestamp - currentTime;
                }
                events.push(id);
                currentTime = timestamp;
            } else {
                // Stack must be non-empty
                // Stack top must be same function ID
                sum[id] += timestamp - currentTime + 1;
                events.pop();
                currentTime = timestamp + 1;
            }
        }

        return sum;
    }
};
// ***** Solution End *****

int main() {
    Solution s;
    vector<string> logs;

    //    logs.push_back("0:start:0");
    //    logs.push_back("0:start:2");
    //    logs.push_back("0:end:5");
    //    logs.push_back("0:start:6");
    //    logs.push_back("0:end:6");
    //    logs.push_back("0:end:7");

    logs.push_back("0:start:0");
    logs.push_back("0:start:2");
    logs.push_back("0:end:5");
    logs.push_back("1:start:6");
    logs.push_back("1:end:6");
    logs.push_back("0:end:7");

    vector<int> sum = s.exclusiveTime(2, logs);
    for (int i = 0; i < sum.size(); i++) {
        cout << sum[i] << " ";
    }
    cout << endl;
    return 0;
}