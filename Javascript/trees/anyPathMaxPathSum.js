var maxPathSum = function(root) {
    if(root === null) {
        return 0;
    }
    var max = Number.MIN_SAFE_INTEGER;
    helper(root);
    function helper(root) {
        if(root===null) {
            return 0;
        }
        if (root.left == null && root.right == null) {
            max = Math.max(max, root.val);
            // console.log("max" , max);
            return root.val;
        }

        max = Math.max(max, root.val);

        var lPathSum = root.left == null ? 0 : helper(root.left);
        var rPathSum = root.right == null ? 0 : helper(root.right);
        var lSum = root.val + lPathSum;
        var rSum = root.val + rPathSum;

        max = Math.max(max, lSum, rSum);

        var totalSum = root.val+ lPathSum+ rPathSum;

        max = Math.max(max, totalSum);
        return Math.max(root.val, lSum, rSum);
    }
    return max;
};
