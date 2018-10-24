var invertTree = function(root) {
    if (root === null) {
        return [];
    }
    var s = [root];
    while(s.length > 0) {
        var temp = s.pop();
        if (!temp) {
            continue;
        }
        var t = temp.left;
        temp.left = temp.right;
        temp.right = t;
        if (temp.right) s.push(temp.right);
        if(temp.left) s.push(temp.left);
    }
    return root;

};

var invertTreeRec = function(root) {
    if (root === null) {
        return [];
    }
    if (root.left === null && root.right === null) {
        return root;
    }

    var t=root.left;
    root.left = root.right;
    root.right = t;
    if (root.left) root.left = invertTreeRec(root.left);
    if (root.right) root.right = invertTreeRec(root.right)
    return root;
};
