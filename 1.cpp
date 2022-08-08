#include <algorithm>
#include <iostream>
#include <vector>
using namespace std;

#include <unordered_map>
class Solution {
   public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> result;
        unordered_map<int, int> um;

        for (int i = 0; i < nums.size(); i++) {
            if (um.find(target - nums[i]) != um.end()) {
                result.push_back(i);
                result.push_back(um.find(target - nums[i])->second);
                break;
            } else {
                um[nums[i]] = i;
            }
        }

        return result;
    }
};

int main() {
    Solution s;
    // vector<int> arr{2, 7, 11, 15};
    // vector<int> result = s.twoSum(arr, 9);

    vector<int> arr{3, 2, 4};
    vector<int> result = s.twoSum(arr, 6);

    cout << result[0] << " " << result[1] << endl;

    return 0;
}