function largestSubGrid(grid, maxSum) {
  const n = grid.length;
  let maxSize;

  function getSubGridLength(i,j,k) {
    let sum = 0;
    for(let x=i; x<i+k; x++) {
      for(let y=j; y<j+k; y++) {
        sum += grid[x][y];
      }
    }
    return sum;
  }

  for(let k=1; k<=grid.length;k++) {
    for(i=0;i<=n-k;i++) {
      for(j=0;j<=n-k;j++) {
        let subGridSum = getSubGridLength(i,j,k);
        console.log(subGridSum);
        if(subGridSum <= maxSum){
          maxSize=k;
        }
      }
    }
  }

  return maxSize;
}

const grid = [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4]];
const maxSum = 39;
console.log(largestSubGrid(grid, maxSum)); // Output: 3