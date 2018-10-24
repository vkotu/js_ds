var tree  = require('./bst.js');
var searchBST = function(root, val) {
    if (root == null) {
        return [];
    }

    if (root.val === val) {
        return root;
    }
    if (val < root.val ) {
        return searchBST(root.left, val);
    }
    else if (val > root.val){
        return searchBST(root.right, val);
    }
    return [];
};


function searchBSTIter (root, val) {
  if (root===null) {
    return;
  }
  var cur = root;
  var target;
  while (cur) {
    if (cur.val === val) {
      target = cur;
      break;
    }
    if (val < cur.val) {
      cur = cur.left;
    }else  if (val > cur.val) {
      cur = cur.right;
    }
  }
  return target;
}

console.log(searchBST(tree.rootNode, 16));
console.log(searchBSTIter(tree.rootNode, 5));
console.log(searchBSTIter(tree.rootNode, 10));
