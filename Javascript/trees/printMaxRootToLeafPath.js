var tree  = require('./tree.js');

var targetLeaf;

function TreeUtil (root) {
  if (root === null || root === undefined) {
    return 'Root must not be empty';
  }
  this.root = root;
  this.max_sum = 0;
  this.targetLeaf;
}

TreeUtil.prototype.findTargetLeaf = function (root, sum) {
  if (root === null) {
    return;
  }
  sum = sum + root.val;
  if (root.left === null && root.right === null && this.max_sum < sum) {
    this.max_sum = sum;
    this.targetLeaf = root;
    // console.log(max_sum);
  }
  this.findTargetLeaf(root.left, sum);
  this.findTargetLeaf(root.right, sum);
}


TreeUtil.prototype.printThePath = function () {
  this.findTargetLeaf(this.root, 0);
  if (this.targetLeaf) {
    this.printNodes(this.root, this.targetLeaf);
  }
}

TreeUtil.prototype.printNodes = function (root, targetLeaf) {
  if (root === null) {
    return false;
  }
  if (root === targetLeaf || this.printNodes(root.left, targetLeaf) || this.printNodes(root.right, targetLeaf)) {
    console.log(root.val);
    return true;
  }else {
    return false;
  }
}

var t = new TreeUtil(tree.rootNode);
t.printThePath();
