var minDepth = function (root) {
  if (!root) return null;

  arr.push(root);

  while (arr.length) {
    let constantLength = arr.length;
    for (let i = 0; i < constantLength; i++) {
      let current = arr.shift();
      if (!current.left && !current.right) return depth;
      if (current.left) arr.push(current.left);
      if (current.right) arr.push(current.right);
    }
    depth++;
  }
};

const minDepth = (root) => {
  if (!root) return null;

  let right = minDepth(root.right);
  let left = minDepth(root.left);

  return (
    (root.right && root.left ? Math.min(left, right) : Math.max(left, right)) +
    1
  );
};

var minDepth = function (root) {
  if (!root) return null;
  let depth = 1;
  let queue = [root];

  while (queue.length) {
    let constantLength = queue.length;
    for (let i = 0; i < constantLength; i++) {
      let current = queue.shift();
      if (!current.left && !current.right) return depth;
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    depth++;
  }
};
