var isSymmetric = function(root) {
    return root == null || symHelp(root.left, root.right);


    function symHelp(left, right) {
       if(left == null || right == null) {
           return left == right;
       }
        if (left.val !== right.val) {
            return false;
        }
      return symHelp(left.left, right.right) && symHelp(left.right, right.left);
    }
};
