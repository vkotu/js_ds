var res = 0;
var pathSum = function(root, sum) {
    var res = 0;
    if(root == null) {
            return 0;
    }

    helper1(root,sum);

    return res;
    function helper1(root, sum){
        if(root == null) {
                return;
        }
        helper2(root, sum);
        helper1(root.left, sum);
        helper1(root.right, sum);

        return res;
    }

    function helper2(root, sum) {
        if(root == null) {
            return;
        }
        if(root.val === sum) {
            res++;
        }
        helper2(root.left, sum - root.val);
        helper2(root.right, sum - root.val);
    }


};
