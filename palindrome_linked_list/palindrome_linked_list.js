/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const isPalindrome = (head) => {
  // create empty array
  const arr = []
  
  // only iterate if head != null
  while(head) {
      // push head.val into array
      arr.push(head.val)
      // set head to head.next to move to the next node in linked list
      head = head.next
  };
  
  // return boolean value of forward and backward arr
  return arr.join(',') === arr.reverse().join(',')
};