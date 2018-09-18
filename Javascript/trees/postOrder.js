var tree  = require('./tree.js');

function recursivePostOrder(root) {
  if (root === null) {
    return;
  }
  recursivePostOrder(root.left);
  recursivePostOrder(root.right);
  console.log(root.val + "->");
}

recursivePostOrder(tree.rootNode);

var stack = [];
function iterativePostOrder(root) {
  if (root === null) {
    return;
  }

  var current = root;

  while(current !== null || stack.length) {
    if (current) {
      stack.push(current);
      current = current.left;
    } else {
      var temp = stack[stack.length - 1].right; //peek and check right
      if (temp) {
        current = temp;
      } else {
        temp = stack.pop();
        console.log(temp.val, " -> ");
        while(stack.length && stack[stack.length-1].right === temp) {
          temp = stack.pop();
          console.log(temp.val, " -> ");
        }
      }
    }
  }
}

iterativePostOrder(tree.rootNode);
