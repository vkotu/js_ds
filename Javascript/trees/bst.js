function node (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}


var root = new node(10);
var node2 = new node(5);
var node3 = new node(16);
var node4 = new node(8);
var node5 = new node(13);
var node6 = new node(18);


root.left = node2;
root.right = node3;
root.left.right = node4;
root.right.left = node5;
root.right.right = node6;


module.exports.rootNode = root;
