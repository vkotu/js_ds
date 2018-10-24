var maxSubArray = function(nums) {
    if(nums)
    var curSum = 0;
    var maxSum =nums[0];

    for(var i=0;i<nums.length;i++) {
        if  (curSum < 0) {
            curSum = nums[i];
        }else {
            curSum += nums[i];
        }
        maxSum = Math.max(curSum, maxSum);
    }
    return maxSum;
};
