var tree  = require('./bst.js');
var tree2  = require('./tree.js');

var max = Number.MAX_SAFE_INTEGER;
var min = Number.MIN_SAFE_INTEGER;
function isBST(root, min, max) {
  if (root === null) {
    return true;
  }
  if (!(root.val >= min && root.val <= max)) {
    return false;
  }

  return isBST(root.left, min, root.val) &&
  isBST(root.right, root.val, max);
}



console.log(isBST(tree.bstRoot, min, max));
console.log(isBST(tree2.rootNode, min, max));
