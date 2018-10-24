var numIslands = function(grid) {
    var islandCnt = 0;
    var q = [];
    for ( var i = 0; i< grid.length; i++) {
        for (var j=0; j<grid[0].length; j++) {
            if  (grid[i][j] === "1") {
                islandCnt++;
                q.unshift([i,j]);
                grid[i][j] = "0";
                while(q.length) {
                    var [islandRow, islandCol] = q.pop();

                    [[1, 0],[-1,0],[0,1],[0, -1]].forEach (([i, j]) => {
                        var isOutOfBounds = islandRow + i < 0 || islandCol + j < 0 || islandCol +j >= grid[0].length || islandRow + i>= grid.length;
                        if (!isOutOfBounds) {
                            if (grid[islandRow+i][islandCol+j] === "1") {
                                q.unshift([islandRow+i,islandCol+j]);
                                grid[islandRow+i][islandCol+j] = "0";
                            }
                        }
                    });
                }
            }
        }
    }
    return islandCnt;

};
