// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// 	toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// 	notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

function expect(val) {
    return {
        toBe: function(expectedVal) {
            if (val === expectedVal) {
            return true;
            } else {
            throw new Error("Not Equal");
        };
    },
    notToBe: function(expectedVal) {
            if (val !== expectedVal) {
            return true;
            } else {
            throw new Error("Equal");
        };  
    }
    };
  }
  try {
    expect(5).toBe(5); // returns true
    expect(5).notToBe(4); // returns true
    expect(5).toBe(4); // throws Error: "Not Equal"
    expect(5).notToBe(5); // throws Error: "Equal"
  } catch (error) {
    console.error(error.message);
  }