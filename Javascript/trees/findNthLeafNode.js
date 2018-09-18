var tree  = require('./tree.js');

var leafCount = 0;
var targetLeadNode;
function isNthLeafNodeFound(root, num) {
  if(root === null) {
    return false;
  }

  if (root.left === null && root.right === null) {
    leafCount++;
    if (leafCount === num) {
      targetLeadNode = root;
      return true;
    }else {
      return false;
    }
  }

  return isNthLeafNodeFound(root.left, num) || isNthLeafNodeFound(root.right, num);
}

var isFound  = isNthLeafNodeFound(tree.rootNode, 10);
console.log(isFound);
if (isFound) {
  console.log(targetLeadNode);
}
