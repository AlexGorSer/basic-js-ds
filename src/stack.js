const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  
  countArr = [];

  push(element) {
    this.countArr.push(element);
    // remove line with error and write your code here
  }

  pop() {
    return this.countArr.pop();
    // remove line with error and write your code here
  }

  peek() {
    let last = this.countArr.length - 1;
    return this.countArr[last];
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack,
};
