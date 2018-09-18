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

  while(true) {
    if (root) {
      stack.push(root);
      root = root.left;
    } else {
      if (!stack.length) { break; }
      var temp = stack.pop();
      console.log(temp.val);
      root = temp.right;
    }
  }
}

iterativeInOrder(tree.rootNode);
