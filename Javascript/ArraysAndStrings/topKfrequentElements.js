const topKFrequent = (nums, k) => {
  const counts = new Map();

  // map the frequency of the numbers
  nums.forEach(value => {
    counts.set(value, (counts.get(value) || 0) + 1);
  });

  const buckets = [];

  // assign each number into a bucket according to its frequency
  Array.from(counts.entries()).forEach(([value, count]) => {
    if (!buckets[count]) {
      buckets[count] = [];
    }

    buckets[count].push(value);
  });

  const result = [];

  // find the most frequently occurring numbers by searching the buckets high-to-low
  for (let i = buckets.length + 1; i >= 0 && result.length < k; i--) {
    if (buckets[i]) {
      result.push(...buckets[i]);
    }
  }

  // slice off any excess values pushed from the last bucket
  return result.slice(0, k);
};


var topKFrequent = function(nums, k) {
    var obj = {

    };
    var res =[];
    for (var i=0;i<nums.length;i++){
        if(obj[nums[i]] !== undefined){
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }
    var x = Object.keys(obj).sort(function (a,b) {
        return obj[b] - obj[a];
    });
    i = 0;

    while(i<k) {
        res.push(Number(x[i]));
        i++;
    }
    return res;
};
