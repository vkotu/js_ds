var tree  = require('./tree.js').rootNode;


console.log(lowestCommonAncestor(tree, tree.left.left, tree.right.right));


function lowestCommonAncestor(root, p, q) {
    if(root === null) {
        console.log('his');
        return;
    }
    var path1 = [];
    var path2 = [];
    if(!findPath(root, path1, p) || !findPath(root, path2, q)) {
        console.log('hi');
        return;
    }
    for (var i=0; i<path1.length && i<path2.length;i++) {
        if (path1[i]!==path2[i]) {
            break;
        }
    }
    return path1[i-1];
};

function findPath(root, path, target) {
    if (root === null) {
        return false;
    }
    path.push(root.val);
    if(root.val === target.val) {
        return true;
    }

    if((root.left && findPath(root.left, path, target)) || (root.right && findPath(root.right, path, target))) {
        return true;
    }
    path.pop();
    return false;
}
