var numIslands = function(grid) {
    var islandCnt = 0;
    for ( var i = 0; i< grid.length; i++) {
        for (var j=0; j<grid[0].length; j++) {
            if  (grid[i][j] === "1") {

                islandCnt++;
                console.log(islandCnt);
                resetNeighbours(grid,i,j);
            }
        }
    }

    return islandCnt;

    function resetNeighbours(grid, i, j) {
        if (i >= grid.length || j >= grid[0].length || i < 0 || j < 0 || grid[i][j] !== "1") {
            return;
        }
        grid[i][j] = 0;

        resetNeighbours(grid, i-1, j);
        resetNeighbours(grid, i+1, j);
        resetNeighbours(grid, i, j+1);
        resetNeighbours(grid, i, j-1);
        return;
    }

};
