 const dfs = (index: number, firstList: Record<number, number[]>, used: boolean[], arr: number[], pieces: number[][]): boolean => {
    if (index == arr.length) return true;

    const firstToMatch = arr[index];
    const candidates = firstList[firstToMatch];
    if (candidates === undefined) return false;

    for (const candIndex of candidates) {
        if (used[candIndex]) continue;

        const cand = pieces[candIndex];
        let allMatch = true;

        for (let j = 0; j < cand.length; j++) {
            if (cand[j] != arr[index + j]) {
                allMatch = false;
                break;
            }
        }

        if (allMatch) {
            used[candIndex] = true;
            const ok = dfs(index + cand.length, firstList, used, arr, pieces);
            if (ok) return true;
            used[candIndex] = false;
        }
    }

    return false;
};

function canFormArray(arr: number[], pieces: number[][]): boolean {
    const firstList: Record<number, number[]> = {}
    // count first elements of each piece
    pieces.forEach((v, index) => firstList[v[0]] === undefined ? firstList[v[0]] = [index] : firstList[v[0]].push(index));
    return dfs(0, firstList, (new Array(pieces.length)).fill(false), arr, pieces);
};
