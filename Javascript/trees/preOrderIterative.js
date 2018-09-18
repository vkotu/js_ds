var tree  = require('./tree.js');

var array = [];
function preOrder(root) {
  if (root === null) {
    return;
  }
  array.push(root);
  while(array.length) {
    var cur = array.pop();
    console.log(cur.val + "->");
    if (cur.right) {
      array.push(cur.right);
    }
    if (cur.left) {
      array.push(cur.left);
    }
  }
}


preOrder(tree.rootNode);
