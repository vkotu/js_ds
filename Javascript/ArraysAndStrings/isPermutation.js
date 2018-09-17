function permutation (str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  // console.log(str1.split("").sort().join(""));
  console.log(str1.localeCompare(str2));
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

console.log(permutation("god", "god"));

function permutation1(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  var charSet1 = {

  };
  var charSet2 = {

  };
  for (var i=0; i<str1.length; i++) {
    if (!charSet1[str1[i]]) {
      charSet1[str1[i]] = 1;
    } else {
      charSet1[str1[i]]++;
    }

    if (!charSet2[str2[i]]) {
      charSet2[str2[i]] = 1;
    } else {
      charSet2[str2[i]]++
    }
  }

  for (var key in charSet1) {
    if (charSet1[key] != charSet2[key]) {
      return false;
    }
  }
  return true;
}

console.log(permutation1("dog  w", "god  i"));
