var tree  = require('./tree.js');

function levelOrder(root) {
  var queue = [];
  if (root === null) {
    return;
  }
  queue.push(root);
  while(queue.length) {
    var temp = queue.shift();
    console.log(temp.val);
    if (temp.left) {
      queue.push(temp.left);
    }
    if (temp.right) {
      queue.push(temp.right);
    }
    // console.log(queue);
  }
}

levelOrder(tree.rootNode);
