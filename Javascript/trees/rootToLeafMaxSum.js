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
console.log("result rec =>" , maxSum);


function findMaxSumIter(root, sum) {
  // console.log(root);
  if (root === null) {
    return;
  }
  var maxSum = Number.MIN_SAFE_INTEGER;
  var s = [ {node: root, sum: root.val }];

  while (s.length > 0) {
    var t = s.pop();
    if (t.node.left === null && t.node.right === null && maxSum < t.sum) {
      maxSum = t.sum;
    }
    if (t.node.right) {
      s.push({node: t.node.right, sum: t.node.right.val + t.sum});
    }
    if (t.node.left) {
      s.push({node: t.node.left, sum: t.node.right.val + t.sum});
    }
  }
  console.log("result iter =>" , maxSum);  
}

findMaxSumIter(tree.rootNode, 0);



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
