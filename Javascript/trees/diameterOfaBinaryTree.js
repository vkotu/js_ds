var diameterOfBinaryTree = function(root) {
    if (root === null) {
        return 0;
    }
    var res = 0;

    function depth(root) {
        if(root === null) {
            return 0;
        }

        var lDepth = root.left ? 1 + depth(root.left) : 0;
        var rDepth = root.right ? 1 + depth(root.right): 0;
        res = Math.max(res, lDepth+rDepth);
        return Math.max(lDepth, rDepth);
    }

    depth(root);
    return res;

};
