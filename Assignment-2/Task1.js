// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.
// /**
// * @param {number[]} arr
// * @param {Function} fn
// * @return {number[]}
// */
// var map = function(arr, fn) {
// };
function Mapping(arr, fn) {
    const transformed = [];
    for (let i = 0; i < arr.length; i++) {
        transformed.push(fn(arr[i], i));
    }
    return transformed;
}
// Example usage
const arr = [1, 2, 3, 4, 5];
const fn = (element, index) => element * index;

const result = Mapping(arr, fn);
console.log(result);
