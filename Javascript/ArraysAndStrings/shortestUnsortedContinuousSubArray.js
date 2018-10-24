// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5

var findUnsortedSubarray = function(nums) {
    var be = nums.length - 1, en = nums.length - 1;

    var sorted = nums.slice(0).sort((a,b) => { return a-b; });

    for(let i=0; i<nums.length;i++){
        if(sorted[i] != nums[i]){
            be = i;
            break;
        }
    }
    for(let i=nums.length-1; i> be; i--) {
        if(sorted[i] != nums[i]){
            en = i;
            break;
        }
    }
    return (en==be)?0:(en-be+1);
};
