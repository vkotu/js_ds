var tree  = require('./tree.js');

//wrong . fix it
var maxLevel = 0;
function rightView(root, level) {
  if (root === null) {
    return;
  }
  if (maxLevel < level) {
    console.log(root.val);
    maxLevel += 1;
  }
  rightView(root.right, level+1);
  rightView(root.left, level+1);
}

rightView(tree.rootNode, 1, 0);
