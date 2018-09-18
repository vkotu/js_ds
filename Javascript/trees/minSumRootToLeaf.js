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


root.left = node2;
root.right = node3;
root.left.left = node4;
root.left.right = node5;
root.right.left = node6;
root.right.right = node7;

var  minSum = Number.MAX_SAFE_INTEGER;

function minSumToLeaf (root, sum) {
  if (root === null) {
    return;
  }
  var sum = sum + root.val;
  if (root.left === null && root.right === null && sum < minSum) {
    minSum = sum;
  }
  minSumToLeaf(root.left, sum);
  minSumToLeaf(root.right, sum);
}
minSumToLeaf(root, 0)
console.log(minSum);
