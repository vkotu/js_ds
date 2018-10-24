var tree  = require('./tree.js');
var tree2 = require('./bst.js');
var mergeTrees = function(t1, t2) {
    if (t1 == null) {
        return t2;
    }
    if (t2 == null) {
        return t1;
    }

    t1.val = t1.val+t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};
console.log(mergeTrees(tree.rootNode, tree2.rootNode));

 mergeTreesIter = function (t1, t2)  {
  if (t1 === null) {
    return t2;
  }
  var s = [];
  s.push([t1, t2]);
  while(s.length>0) {
    var temp = s.pop();
    if (temp[0] === null || temp[1] === null) {
      continue;
    }
    temp[0].val = temp[0].val + temp[1].val;
    if (temp[0].left === null) {
      temp[0].left = temp[1].left;
    }else {
      s.push([temp[0].left, temp[1].left]);
    }

    if (temp[0].right === null) {
      temp[0].right = temp[1].right;
    } else {
      s.push([temp[0].right, temp[1].right]);
    }

  }
  return t1;
}

console.log(mergeTreesIter(tree.rootNode, tree2.rootNode));
