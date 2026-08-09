const removeFromArray = function(arr, ...args) {
  return arr.filter(item => !args.includes(item));
};

console.log(removeFromArray([1,5,4,6,7,83,4,5,6,3], 5,4,3))

// Do not edit below this line
module.exports = removeFromArray;
