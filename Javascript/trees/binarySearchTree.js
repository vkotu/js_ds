function Node (val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root=null;
}

BinarySearchTree.prototype.push = function push (val) {
  var root = this.root;
  var node = new Node(Val);
  if (root === null) {
    this.root = node;
    return;
  }
  var parentNode = null;
  var currentNode = root;

  while (currentNode) {
    parentNode = currentNode;
    if (val <= currentNode.val) {
      currentNode = currentNode.left;
      if(!currentNode) {
        parentNode.left = node;
        break;
      }
    }
    if (val > currentNode.val) {
      currentNode = currentNode.right;
      if(!currentNode) {
        parentNode.right = node;
        break;
      }
    }
  }
}
