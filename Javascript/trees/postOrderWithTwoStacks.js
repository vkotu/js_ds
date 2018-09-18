var tree  = require('./tree.js');

function postOrder(root) {
  if(root === null) {
    return;
  }
  var stack1 = [root];
  var stack2 = [];
  while(stack1.length) {
    var temp = stack1.pop();
    stack2.push(temp);
    if (temp.left) {
      stack1.push(temp.left);
    }
    if (temp.right) {
      stack1.push(temp.right);
    }
  }
  while(stack2.length) {
    console.log(stack2.pop().val);
  }
}

postOrder(tree.rootNode);
