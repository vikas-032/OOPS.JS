/* Write code that enhances all arrays such that you can call the array.last()
 method on any array and it will return the last element. If there are no
elements in the array, it should return -1.
You may assume the array is the output of JSON.parse. */

/* Array.prototype.last = function() {
    if(this.length === 0){
        return -1;
    }
    return this[this.length - 1];

} */


/* Q2 You are given two non-empty linked lists representing
 two non-negative integers. The digits are stored in 
 reverse order, and each of their nodes contains a 
 single digit. 
Add the two numbers and return the sum as a linked list.
 You may assume the two numbers do not contain any leading zero, except the number 0 itself */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next = null) {
 *   this.val = val;
 *   this.next = next;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  
  return dummy.next;
};
