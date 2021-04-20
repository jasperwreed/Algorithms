const minDepth = (root) => {
  if (!root) return null;

  let right = minDepth(root.right);
  let left = minDepth(root.left);

  return (
    (root.right && root.left ? Math.min(left, right) : Math.max(left, right)) +
    1
  );
};

const minDepth = root => {
  if (!root) return null;

  let right = minDepth(root.right)
  let left = minDepth(root.left)

  if (root.right && root.left) {
    return Math.min(left, right) + 1
  } else {
    return Math.max(left, right) + 1
  }
}
