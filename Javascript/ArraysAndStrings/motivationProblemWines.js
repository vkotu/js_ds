var P = [2, 3, 5, 1, 4];

function calculate() {
  var N = P.length;
  var dp = [];
  for(var i =0; i<N;i++) {
    dp[i]= new Array(N);
  }
  return maxProfit(0, N-1);
  function maxProfit(be, en) {
    if (be > en) {
      return 0;
    }
    if (dp[be][en] !== undefined) {
      return (dp[be][en]);
    }
    var y = N - (en - be + 1) + 1; //total - (en-be + 1) no of unsold wines + 1 = current year
    return dp[be][en] = Math.max(P[be]*y + maxProfit(be+1, en), P[en]*y + maxProfit(be, en-1));
  }
}

console.log(calculate());
