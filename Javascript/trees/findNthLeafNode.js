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

var isFound  = isNthLeafNodeFound(tree.rootNode, 2);

if (isFound) {
  console.log(targetLeadNode);
}


function isNthLeafNodeIter(root, num) {
  if (root === null) {
    return false;
  }
  var leafCount = 0;
  var s = [root];
  while (s.length>0) {
    var t = s.pop();
    if (t.left === null && t.right === null) {
      leafCount++;
      if (leafCount === num) {
        return t;
      }
    }
    if (t.right) {
      s.push(t.right);
    }
    if (t.left) {
      s.push(t.left);
    }
  }
  return false;
}
console.log(isNthLeafNodeIter(tree.rootNode, 2));
