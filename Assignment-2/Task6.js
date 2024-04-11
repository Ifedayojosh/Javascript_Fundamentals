// Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
// The first time the returned function is called, it should return the same result as fn.
// Every subsequent time it is called, it should return undefined.
//  /**
// * @param {Function} fn
// * @return {Function}
// */
// var once = function(fn) {
//    return function(...args){    
//    }
// };
function once(fn) {
    let hasBeenCalled = false;
    let result;

    return function(...args) {
        if (!hasBeenCalled) {
            result = fn(...args);
            hasBeenCalled = true;
            return result;
        } else {
            return undefined;
        }
    };
}
// Example usage
function add(a, b) {
    return a + b;
}

const addOnce = once(add);

console.log(addOnce(2, 3)); // Output: 5
console.log(addOnce(4, 5)); // Output: undefined
console.log(addOnce(6, 7)); // Output: undefined
