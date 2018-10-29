var tree  = require('./tree.js').rootNode;


console.log(lowestCommonAncestor(tree, tree.right.left, tree.right.right));


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
    console.log(path);
    var isFound = (findPath(root.left, path, target)) || ( findPath(root.right, path, target));
    if(!isFound) {
        path.pop();
    }
    
    return isFound;
}
