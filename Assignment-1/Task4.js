// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// 	increment() increases the current value by 1 and then returns it.
// 	decrement() reduces the current value by 1 and then returns it.
// 	reset() sets the current value to init and then returns it.

const createCounter = function(init) {
    let currentValue = init

    return {
        increment:function(){
            return currentValue += 1
        },

        decrement:function(){
            return currentValue -= 1
        },

        reset:function(){
            return currentValue = init
        }
    }

};
let myFunction = createCounter(4);
console.log(myFunction.increment())
console.log(myFunction.reset())
console.log(myFunction.decrement())
