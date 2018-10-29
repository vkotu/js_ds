var tree  = require('./tree.js');

function recursiveInOrder (root) {
  if (root === null) {
    return root;
  }
  recursiveInOrder(root.left);
  console.log(root.val);
  recursiveInOrder(root.right);
}

recursiveInOrder(tree.rootNode);

var stack = [];
function iterativeInOrder (root) {
  if (root === null) {
    return;
  }
  var res = [];
  while(true) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      if (!stack.length) { break; }
      var temp = stack.pop();
      res.push(temp.val);
      root = temp.right;
    }
  }
  console.log(res.join(","));
}

iterativeInOrder(tree.rootNode);
