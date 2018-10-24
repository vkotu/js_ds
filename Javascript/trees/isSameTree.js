var isSameTree = function(p, q) {
    if (p == null && q == null){
        return true;
    }
    if (p === null || q == null) {
        return false;
    }
    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};


function isSameTreeIter (p, q) {
  if (p === null && q === null) {
    return true;
  }
  if  (p === null || q === null) {
      return false;
  }
  var queue1 = [p];
  var queue2 = [q];
  while (queue1.length > 0 || queue2.length > 0) {
      var t1 = queue1.shift();
      var t2 = queue2.shift();
      if (t1 === null && t2 === null) {
          continue;
      }
      if  (t1 === null || t2 === null) {
          return false;
      }
      if (t1.val !== t2.val) {
          return false;
      }
      queue1.push(t1.left);
      queue2.push(t2.left);
      queue1.push(t1.right);
      queue2.push(t2.right);
   }
  return true;
}
