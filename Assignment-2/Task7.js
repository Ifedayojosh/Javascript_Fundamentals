// Given a function fn, return a memoized version of that function.
// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
// You can assume there are 3 possible input functions: sum, fib, and factorial.
// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
//  /**
// * @param {Function} fn
// * @return {Function}
// */
// function memoize(fn) {
//    return function(...args) {     
//    }
// }
function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key] === undefined) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
}

// Original functions
function sum(a, b) {
    return a + b;
}

function fib(n) {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

function factorial(n) {
    if (n <= 1) return 1;
    return factorial(n - 1) * n;
}

// Memoized versions of functions
const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

console.log(memoizedSum(1, 2)); // Output: 3
console.log(memoizedSum(1, 2)); // Output: 3 (cached value)

console.log(memoizedFib(5)); // Output: 8
console.log(memoizedFib(5)); // Output: 8 (cached value)

console.log(memoizedFactorial(4)); // Output: 24
console.log(memoizedFactorial(4)); // Output: 24 (cached value)
