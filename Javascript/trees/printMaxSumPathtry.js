var tree  = require('./tree.js');

var root = tree.rootNode;

function printPathOfMaxSum(root) {
  if (root == null) {
    return;
  }
  var maxSum = -999999;
  var targetNode = util(root);
  print(root, targetNode);
  function util(root) {
    if(root ==null) {
      return;
    }
    var st = [{n: root, sum: root.val}];
    var tNode;
    while(st.length) {
      var t = st.pop();
      if(t.n.left == null && t.n.right == null && maxSum < t.sum) {
        maxSum = t.sum;
        tNode =  t.n;
      }
      if(t.n.right) { st.push({n: t.n.right, sum: t.n.right.val + t.sum })}
      if(t.n.left) { st.push({n: t.n.left, sum: t.n.left.val + t.sum })}
    }
    return tNode;
  }

  function print(root, targetNode) {

    if (root === null) {
      return false;
    }
    if (root === targetNode || print(root.left, targetNode) || print(root.right, targetNode)) {
      console.log(root.val);
      return true;
    }
    return false;
  }
}


console.log(printPathOfMaxSum(root));