function uniquePaths(m: number, n: number): number {
    const dp = new Array(m + 1).fill(new Array(n + 1).fill(0));
    dp[1][1] = 1;

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (i == 1 && j == 1) continue;
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }

    return dp[m][n];
};