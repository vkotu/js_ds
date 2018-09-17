function maxSum(a) {
  if (!a.length) {
    return;
  }
  var firstBiggest, secondBiggest;
  if (a[0] > a[1]) {
    firstBiggest = a[0];
    secondBiggest = a[1];
  } else {
    firstBiggest = a[1];
    secondBiggest = a[0];
  }

  for (var i=2; i< a.length; i++) {
    if (a[i] > firstBiggest) {
      secondBiggest = firstBiggest;
      firstBiggest = a[i];
    } else if (a[i] > secondBiggest) {
      secondBiggest = a[i];
    }
  }

  console.log(firstBiggest, secondBiggest);
}

maxSum([8, 2, 4, 99, 23, 65, 999]);
