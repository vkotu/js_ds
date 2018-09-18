var tree  = require('./tree.js');


var maxLevel = 0;
function leftView (root, level) {
  if (root === null) {
    return;
  }
  if (maxLevel < level) {
    maxLevel += 1;
    console.log(root.val);
  }
  leftView(root.left, level+1);
  leftView(root.right, level+1);
}


leftView(tree.rootNode, 1);
