var tree  = require('./tree.js');


var maxSum = Number.MIN_SAFE_INTEGER;
var targetLeaf;
function findMaxSum(root, sum) {
  // console.log(root);
  if (root === null) {
    return;
  }
  sum = sum + root.val;
  if (root.left === null && root.right === null && sum > maxSum) {
    maxSum = sum;
    targetLeaf = root;
    // console.log(maxSum);
  }
  if(root.left) findMaxSum(root.left, sum);
  if(root.right) findMaxSum(root.right, sum);
}

findMaxSum(tree.rootNode, 0);

function printPath (root, targetLeaf) {
  if (root === null) {
    return false;
  }
  if (root === targetLeaf || printPath(root.left, targetLeaf) || printPath(root.right, targetLeaf)) {
    console.log(root.val);
    return true;
  }
  return false;
}

printPath(tree.rootNode, targetLeaf);

console.log(maxSum);
