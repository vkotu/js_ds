var findTarget = function(root, k) {
    var arr = [];
    return findTargetNode(root, k , arr);
};

function findTargetNode(root, k, arr) {
    if (root === null) {
        return false;
    }
    if (arr.includes(k - root.val)) {
        return true;
    }else {
        arr.push(root.val);
    }
    return findTargetNode(root.left, k, arr) || findTargetNode(root.right, k, arr);

}
