'use strict';

function NaiveDict() {
  this.keys=[];
  this.values = [];
  this.set = function (key,value) {
    this.keys.push(key);
    this.values.push(value);
  }
  this.get = function (lookupKey) {
    for (var i=0;i<this.keys.length;i++){
      var key = this.keys[i];
      if (key === lookupKey) {
          return this.values[i]
      }
    }
  }
}

function HashTable () {
  this.bucketSize = 100000;
  this.buckets = [];
  for (var i=0; i< this.bucketSize;i++){
    this.buckets.push(new NaiveDict())
  }
}

function hashFunction (key) {
  var hash = 0;
  for (var i=0 ; i< key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash;
}


HashTable.prototype.hashFunction = function(key){
    var hash = 0;
    if (key.length == 0) return hash;
    for (var i = 0; i < key.length; i++) {
        console.log("<< ", hash<<5);
        hash = (hash<<5) - hash;
        console.log("<< -hash ", hash);
        hash = hash + key.charCodeAt(i);
        console.log("hash + char code ", hash);
        hash = hash & hash; // Convert to 32bit integer
        console.log("hash &hash ", hash);
    }
    return Math.abs(hash);
}


HashTable.prototype.getBucketIndex = function (key) {
  var index = (this.hashFunction(key) % this.bucketSize);
  console.log('index', index);
  return index;
}
HashTable.prototype.getBucket = function (key) {
  return this.buckets[this.getBucketIndex(key)];
}

HashTable.prototype.set = function (key,value) {
  this.getBucket(key).set(key, value);
}

HashTable.prototype.get = function(lookupKey){
    return this.getBucket(lookupKey).get(lookupKey)
}

var dict = new HashTable();

// dict.set('a',10);
// dict.set('b',10);
dict.set('c',20);
console.log(dict.get('c'));
