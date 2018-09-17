var map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

function idToShortUrl(id) {
  console.log(map.length);
  var shortUrl = "";
  while (id) {
    console.log(id%62);
    shortUrl += map[Math.round(id%62)];
    id = Math.round(id/62);
    console.log(id);
    console.log("/////////////////////////////");
  }

  return shortUrl;
}
console.log(map.indexOf("h"),
map.indexOf("n"),
map.indexOf("d"))
console.log(idToShortUrl(12345));
