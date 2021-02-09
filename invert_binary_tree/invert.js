// Invert a binary tree.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const invertTree = (root) => {
  if (!root) return null;

  let right = invertTree(root.right);
  let left = invertTree(root.left);

  root.left = right;
  root.right = left;

  return root;
};
