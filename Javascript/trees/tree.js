function node (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}


var root = new node(1);
var node2 = new node(2);
var node3 = new node(3);
var node4 = new node(4);
var node5 = new node(5);
var node6 = new node(6);
var node7 = new node(7);
var node8 = new node(8);
var node9 = new node(9);


root.left = node2;
root.right = node3;
root.left.left = node4;
root.left.right = node5;
root.left.right.right = node9;
root.right.left = node6;
root.right.right = node7;
root.right.right.right = node8;


module.exports.rootNode = root;
