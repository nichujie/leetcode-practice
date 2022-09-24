function canJump(nums: number[]): boolean {
    let current = 0, farthest = 0;
    while (current <= farthest && current < nums.length) {
        if (current + nums[current] > farthest) {
            farthest = current + nums[current];
        }
        current++;

        if (farthest >= nums.length - 1) {
            return true;
        }
    }
    return false;
};