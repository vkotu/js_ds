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


var hasPathSum = function(root, sum) {
    if (root == null) {
        return false;
    }
    if (root.left === null && root.right === null && sum === root.val) {
        return true;
    }
    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};

var hasPathSum = function(root, sum) {
    var s = [];
    if (root === null) {
        return false;
    }
    s.push({node: root, sum: root.val});
    while (s.length>0) {
        var t = s.pop();
        if (t.node.right == null && t.node.left ==null && t.sum === sum) {
            return true;
        }
        if(t.node.right) {
            s.push({node: t.node.right, sum: t.sum + t.node.right.val});
        }
        if(t.node.left) {
            s.push({node: t.node.left, sum: t.sum + t.node.left.val});
        }
    }
    return false;
};
