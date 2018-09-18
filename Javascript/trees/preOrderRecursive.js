var tree  = require('./tree.js');

function preOrder (root) {
  if(root === null) {
    return;
  }
  console.log(root.val + " ->");
  preOrder(root.left);
  preOrder(root.right);
}

preOrder(tree.rootNode);
