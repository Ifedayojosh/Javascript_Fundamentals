// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.
// /**
// * @param {Function[]} functions
// * @return {Function}
// */
//  var compose = function(functions) {
//    return function(x) {    
//    }
// };
function composeFunctions(functions) {
    if (functions.length === 0) {
        // If the array of functions is empty, return the identity function
        return function(x) { return x; };
    } else {
        // Recursively apply function composition
        return functions.reduceRight((prevFn, currentFn) => {
            return function(x) {
                return currentFn(prevFn(x));
            };
        });
    }
}
// Example usage
const f1 = (x) => x * 2;
const f2 = (x) => x + 3;
const f3 = (x) => x - 5;

const functions = [f1, f2, f3];

const composedFunction = composeFunctions(functions);
console.log(composedFunction(10)); // Output: ((10 - 5) + 3) * 2 = 16
