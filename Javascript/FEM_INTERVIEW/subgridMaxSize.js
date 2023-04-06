function largestSubGrid(grid, maxSum) {
  const n = grid.length;

  function getSubgridSum(i, j, k) {
    let subgridSum = 0;
    console.log(i, j, k);
    for (let x = i; x < i + k; x++) {
      for (let y = j; y < j + k; y++) {
        subgridSum += grid[x][y];
      }
    }
    console.log(subgridSum);
    return subgridSum;
  }

  let maxSize = 0;

  for (let k = 1; k <= n; k++) {
    for (let i = 0; i <= n - k; i++) {
      for (let j = 0; j <= n - k; j++) {
        const subgridSum = getSubgridSum(i, j, k);
        if (subgridSum <= maxSum) {
          maxSize = Math.max(maxSize, k);
        }
      }
    }
  }

  return maxSize;
}

const grid = [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4]];
const maxSum = 39;
console.log(largestSubGrid(grid, maxSum)); // Output: 3