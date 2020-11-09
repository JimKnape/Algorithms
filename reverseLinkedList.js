/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* 206. Reverse Linked List
https://leetcode.com/problems/reverse-linked-list/

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

*/

var reverseLinkedList = function(head) {
  let prev = null;
  let curr = head;
  let next = null;
  
//[1,2,3,5,null]
    
  while (curr !== null) {
    //save next
    next = curr.next;
    //reverse
    curr.next = prev;
    //advance prev and current
    prev = curr;
    curr = next;

  }

  // let stack = [];
  // let curr = head;
  // while(curr) {
  //   stack.push(curr.val);
  //   curr = curr.next;
  // }
  // curr = head;
  // while (stack.length) {
  //   curr.val = stack.pop();
  //   curr = curr.next
  // }
  // return head;
};