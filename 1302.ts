/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function deepestLeavesSum(root: TreeNode | null): number {
    if (root === null) return 0;

    let sum = 0, maxDep = -1;

    const dfs = (dep: number, current: TreeNode): void => {
        if (dep > maxDep) {
            sum = current.val;
            maxDep = dep;
        } else if (dep === maxDep) {
            sum += current.val;
        }

        if (current.left) dfs(dep + 1, current.left);
        if (current.right) dfs(dep + 1, current.right);
    }

    dfs(0, root);

    return sum;
};