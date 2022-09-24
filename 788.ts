function rotatedDigits(n: number): number {
    const isGood = (num: number): boolean => {
        let changed = false;

        for (const d of num.toString()) {
            const s = parseInt(d);
            if (s === 3 || s === 4 || s === 7) return false; // Not good
            if (s === 2 || s === 5 || s === 6 || s === 9) changed = true;
        }

        return changed;
    };

    return new Array(n).fill(0).map((_val, ind) => ind + 1).filter(v => isGood(v)).length;
};