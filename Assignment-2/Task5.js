// Write a function argumentsLength that returns the count of arguments passed to it.
// /**
// * @param {...(null|boolean|number|string|Array|Object)} args
// * @return {number}
// */
// var argumentsLength = function(...args) {
  
// };
function argumentsLength() {
    return arguments.length;
}
console.log(argumentsLength()); // Output: 0
console.log(argumentsLength(1, 2, 3)); // Output: 3
console.log(argumentsLength("a", "b", "c", "d")); // Output: 4
