function lengthOfLongestSubstring(s: string): number {
    const charSet: Set<string> = new Set();
    let left = 0, right = 0;
    let result = 0;
    
    for (;right < s.length; right++) {
        if (!charSet.has(s[right])) {
            charSet.add(s[right]);
            const len = right - left + 1;
            result = len > result ? len : result;
        } else {
            while (s[left] != s[right]) {
                charSet.delete(s[left]);
                left += 1;
            }
            // So far, s[left] = s[right]
            left += 1;  // So we only need to add 1 to left
        }
    }

    return result;
};