var tree  = require('./tree.js');

var max_level = 0

function rightView(root, level) {
  if(root === null) {
    return;
  }
  if (max_level < level) {
    console.log(root.val);
    max_level += 1;
  }
  rightView(root.right, level+1);
  rightView(root.left, level+1);
}

rightView(tree.rootNode, 1);

function iter (root) {
  var max_level = 0;
  if (root == null) {
    return;
  }
  var s = [{node: root, level: 1 }];

  while(s.length) {
    var temp = s.pop();

    if (max_level < temp.level) {
      console.log(temp.node.val);
      max_level++;
    }
    if (temp.node.left) {
      s.push({node: temp.node.left, level: temp.level + 1});
    }
    if (temp.node.right) {
      s.push({node: temp.node.right, level: temp.level + 1});
    }
  }

}


iter(tree.rootNode);
