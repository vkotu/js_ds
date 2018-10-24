var hammingDistance = function(x, y) {
    var count = 0;
    while(x > 0 || y > 0 ) {
        if(Math.round(x%2) !== Math.round(y%2)) {
            count++;
        }
        x=Math.floor(x/2);
        y=Math.floor(y/2);
    }
    return count;
};
