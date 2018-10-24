var moveZeroes = function(nums) {
    var j =0 ;

    for (var i=0; i<nums.length; i++){
        if (nums[i] !==0) {
            var temp = nums[i];
            nums[i] = 0;
            nums[j] = temp;
            j++;
        }
    }


    // var idx = 0;
    //  for (var i=0; i< nums.length; i++) {
    //      if (nums[i]!==0) {
    //          nums[idx++] = nums[i];
    //      }
    //  }
    //  while(idx < nums.length) {
    //      nums[idx++] = 0;
    //  }
};
