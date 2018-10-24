var tree  = require('./tree.js');
var levelOrderBottom = function(root) {
    var q = [];
    var s = [];
    if (root === null) {
        return;
    }
    q.push(root);
    while(q.length) {
        var t = q.shift();
        s.push(t);
        if (t.right) {
            q.push(t.right);
        }
        if (t.left) {
            q.push(t.left);
        }
    }

    while (s.length) {
        console.log(s.pop().val);
    }
};


levelOrderBottom(tree.rootNode);


var levelOrderBottom1 = function(root) {

    var queue = [ {node : root, level : 0} ],
        crt,
        stack = [],
        maxLevel,
        result = [];

    if(!root)
        return result;

    while(queue.length > 0) {
        crt = queue.shift(); // dequeue()

        stack.push(crt);

        if(crt.node.right)
            queue.push( { node : crt.node.right, level : crt.level + 1 } );

        if(crt.node.left)
            queue.push( { node : crt.node.left, level : crt.level + 1 });

      maxLevel = crt.level + 1;
    }

    while(stack.length > 0) {
        crt = stack.pop();
        if(crt.level < maxLevel) {
            result.push([]);
            maxLevel--;
        }
        result[result.length - 1].push(crt.node.val);

    }

    return result;
};
