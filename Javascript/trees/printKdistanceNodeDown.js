var tree  = require('./tree.js');

printkdistanceNodeDown(root,  k)
{
    // Base Case
    if (root == NULL || k < 0)  return;

    // If we reach a k distant node, print it
    if (k==0)
    {
        console.log(root.val)
        return;
    }

    // Recur for left and right subtrees
    printkdistanceNodeDown(root.left, k-1);
    printkdistanceNodeDown(root.right, k-1);
}


printkdistanceNodeDown(tree.rootNode, 2);
