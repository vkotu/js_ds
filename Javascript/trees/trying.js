var tree  = require('./tree.js');

var root = tree.rootNode;


function checkIfSumRootToLeaf(root, sumToCheck) {
  if(root === null) {
    return false;
  }
  var s = [{n: root, s: root.val}];
  
  while(s.length) {
    var t = s.pop();
    if(t.n.left === null && t.n.right === null && sumToCheck === t.s) {
      return true;
    }
    if(t.n.right) { s.push({n: t.n.right, s: t.s + t.n.right.val}) }
    if(t.n.left) {s.push({n: t.n.left, s: t.s + t.n.left.val}) }
    
  }
  return false;
}

console.log(checkIfSumRootToLeaf(root, 1));