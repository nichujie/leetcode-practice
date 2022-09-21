function climbStairs(n: number): number {
    if (n == 1) return 1;

    let fib = [1, 1];
    for (let i = 2; i <= n; i++) fib = [fib[1], fib[0] + fib[1]];
    return fib[1];
};