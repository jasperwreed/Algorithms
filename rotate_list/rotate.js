// Given the head of a linked list, rotate the list to the right by k places.

const rotateRight = (head, k) => {
  let node = head;
  let arr = [];
  let len = 0;

  while (head) {
    arr.push(head);
    head = head.next;
    len++;
  }

  for (let i = 0; i < k % len; i++) {
    let last = arr.pop();
    last.next = node;
    node = last;
    arr[arr.length - 1].next = null;
  }

  return node;
};
