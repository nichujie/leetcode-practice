function decrypt(code: number[], k: number): number[] {
    if (k === 0) return new Array(code.length).fill(0)

    const n = code.length;
    const result = new Array(n).fill(0);
    let start = k > 0 ? 1 : 0;
    let end = k > 0 ? (start + k - 1) % n : (-k - 1) % n
    let pos = k > 0 ? 0 : (-k) % n;
    let sum = 0;

    for (let i = start; i <= end; i++) sum += code[i];

    for (let i = 0; i < n; i++) {
        result[pos] = sum;
        sum -= code[start];
        pos = (pos + 1) % n;
        start = (start + 1) % n;
        end = (end + 1) % n;
        sum += code[end];
    }

    return result;
};