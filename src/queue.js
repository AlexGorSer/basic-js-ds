const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
    // remove line with error and write your code here
  }

  enqueue(value) {
    let listNode = new ListNode(value);

    if(!this.head) {
      
      this.head = listNode;
      this.tail = listNode;

      return this;
    } else {

      this.tail.next = listNode;
      this.tail = listNode;
      
      return this;
    }
    // remove line with error and write your code here
  }

  dequeue() {

    let del = this.head.value;
    this.head = this.head.next;

    return del;
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
