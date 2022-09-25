function longestValidParentheses(s: string): number {
    let maxN = 0, p = 0;
    while (p < s.length) {
        while (s[p] !== '(' && p < s.length) p++;
        if (p === s.length) break;

        let start = p, counter = 1, len = 1;
        while (start < s.length - 1) {
            start++;
            len++;
            if (s[start] === ')') counter--;
            else counter++;

            if (counter === 0) { 
                maxN = Math.max(maxN, len);
                p = start;
            } else if (counter < 0) {
                break;
            }
        }
        p++;
    }

    return maxN;
};