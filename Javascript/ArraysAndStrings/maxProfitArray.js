var maxProfit = function(prices) {
    var buyFor = prices[0];
    var profit = 0;

    for (var i=0; i<prices.length; i++) {
        if (prices[i] - buyFor > 0) {
            profit = Math.max(profit, prices[i] - buyFor);
        }else {
            buyFor = prices[i];
        }
    }
    return profit;
};
