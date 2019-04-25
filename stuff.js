var counter = function(arr) {
  return `这个数组的元素个为：${arr.length}`;
};

var adder = function(a, b) {
  return `和为${a + b}`;
};

var pi = 3.1415;

//module
module.exports = {
  counter,
  adder,
  pi
};
