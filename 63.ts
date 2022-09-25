function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = new Array(m).fill(0).map(_ => new Array(n).fill(0));
    dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (obstacleGrid[i][j] === 1) continue;
            if (i === 0 && j === 0) continue;
            if (i === 0) {
                dp[i][j] = dp[i][j - 1] * (1 - obstacleGrid[i][j - 1]);
            } else if (j === 0) {
                dp[i][j] = dp[i - 1][j] * (1 - obstacleGrid[i - 1][j]);
            } else {
                dp[i][j] = dp[i - 1][j] * (1 - obstacleGrid[i - 1][j]) + dp[i][j - 1] * (1 - obstacleGrid[i][j - 1]);
            }
        }
    }

    return dp[m - 1][n - 1];
};