function jump(nums: number[]): number {
    const n = nums.length;
    const dp = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    dp[0] = 0; // 起始情况，原点次数为0

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j <= i + nums[i] && j < n; j++) {
            dp[j] = Math.min(dp[j], dp[i] + 1);
        }
    }

    return dp[n - 1];
};