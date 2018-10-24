var tree  = require('./tree.js');


var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    var leftD = 1 + maxDepth(root.left);
    var rightD = 1 + maxDepth(root.right);
    return leftD <= rightD ? rightD : leftD;
};


console.log(maxDepth(tree.rootNode));

var maxDepthIter = function(root) {
    if (root === null) {
        return 0;
    }
    var maxDepth = 1;
    var s = [];
    s.push({node: root, level: 1});

    while(s.length > 0) {
        var t = s.pop();
        if (t.node.left === null && t.node.right === null) {
            maxDepth = maxDepth < t.level ? t.level : maxDepth;
        }
        if (t.node.right) s.push({node: t.node.right, level: t.level + 1});
        if (t.node.left) s.push({node: t.node.left, level: t.level + 1});
    }
    return maxDepth;
};


var maxDepthBFS = function (root) {
    if (root === null) {
        return 0;
    }
    var q = [{node: root, level: 1}];
    var maxDepth = 0;

    while(q.length > 0) {
        var t = q.shift();
        if (t.node.left === null && t.node.right === null) {
           maxDepth =  maxDepth < t.level ? t.level : maxDepth;
        }
        if (t.node.left) {
            q.push({node: t.node.left, level: 1+t.level});
        }
        if (t.node.right) {
            q.push({node: t.node.right, level: 1+t.level});
        }
    }
    return maxDepth;
}
