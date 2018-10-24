var tree  = require('./tree.js');


var print = (function printTillNth () {
  var targetLevel;

  function traverse(root, level) {
    if (root === null) {
      return;
    }

    console.log(root.val);
    if (level === targetLevel) {
      return;
    }
    traverse(root.left, level+1);
    traverse(root.right, level+1);
  }

  return function print(root, n) {
    targetLevel = n;
    if (root === null) {
      return;
    }
    traverse(root, 1);
  }
})();


print(tree.rootNode, 3);
