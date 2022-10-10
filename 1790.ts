function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) return false;

    if (s1 === s2) return true;

    const diff = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) diff.push(i);
    }

    if (diff.length !== 2) return false;
    const [i, j] = diff;
    if (s1[i] === s2[j] && s1[j] === s2[i]) return true;
    return false;
};