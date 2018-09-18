var tree  = require('./tree.js');

var root = tree.rootNode;


function checkIfSumRootToLeaf(root, sum, sumToCheck) {
  if (root === null) {
    return false;
  }
  var sum = sum + root.val;
  if (root.left === null && root.right === null) {
    if (sum === sumToCheck) return true;
  }

  return checkIfSumRootToLeaf(root.left, sum, sumToCheck) || checkIfSumRootToLeaf(root.right, sum, sumToCheck);

}

console.log(checkIfSumRootToLeaf(root, 0, 12));
