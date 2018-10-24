var input = [1, 1, 1, 1, 1]// 3
var input2 = [3, 9, 3, 2,1]; // 99


console.log(targetSum(input2, 99));
console.log(targetSum(input, 5));


function targetSum (numbers, sum) {
  if (!numbers.length && sum === 0) {
    return true;
  }
  if(!numbers.length && sum !== 0) {
    return false;
  }
  var dp = {};
  return check(sum, 0 );


  function check(sum, i) {

    var key = sum+","+i;
    if (dp[key] !== undefined) {
      return dp[key];
    }
    if (i === numbers.length) {
      if(sum === 0) {
        dp[key] = true;
        return true;
      }else {
        dp[key] = false;
        return false;
      }
    }
    dp[key] = check(sum-numbers[i], i+1) || check(sum+numbers[i], i+1);
    return dp[key];
  }
}
