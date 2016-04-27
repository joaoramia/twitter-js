var _ = require('lodash');

var data = [];
var names = [];

function add (name, text) {
  data.push({ name: name, text: text, id: i });
}

function list () {
  return _.cloneDeep(data);
}

function find (key, value) {
  return _.cloneDeep(_.filter(data, [key, value]));
}

module.exports = { add: add, list: list, find: find };

//--------------- tweets

var randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getFakeName = function() {
  var fakeFirsts = ['Nimit', 'Dave', 'Shanna', 'Charlotte', 'Scott', 'Ayana', 'Omri', 'Gabriel', 'Joe'];
  var fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

var getFakeTweet = function() {
  var awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (var i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

data[0].clothes = "suit";
data[5].clothes = "dress";

console.log(data);