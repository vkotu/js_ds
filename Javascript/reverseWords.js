var text = "hi iam good how are you doing buddy";

String.prototype.split2 = function (delimeter) {
  if (delimeter === null || delimeter === undefined) {
    return;
  }
  if (typeof this.toString() !== 'string') {
     throw new TypeError('String expected');
  }
  if (!this.length) {
    return '';
  }
  var tempWord = "";
  var result=[];
  for (var i=0; i<this.length; i++) {
    if(this.charAt(i) === delimeter) {
      result.push(tempWord);
      tempWord="";
    } else {
      tempWord += this.charAt(i);
    }
  }
  if (tempWord !== "") {
    result.push(tempWord);
  }
  return result;
}

function rev(str) {
  var words = str.split2(' ');
  var result = "";
  for (var i = words.length-1 ; i>=0; i--) {
    result += words[i] + " ";
  }
  return result;
}

console.log(rev(text));



function reverseWordsInPlace (str) {
  var words = str.split(' ');
  for (var i = 0; i< words.length; i++) {
    words[i] = words[i].split('').reverse().join('');
  }
  return words.join(' ');
}

console.log(reverseWordsInPlace(text));
