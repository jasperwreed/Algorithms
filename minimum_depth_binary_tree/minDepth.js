var minDepth = function(root) {
    if (!root) return null
    let depth = 1
    let arr = []
    
    arr.push(root)
    
    while (arr.length) {
        let constantLength = arr.length
        for (let i = 0; i < constantLength; i++) {
            let current = arr.shift()
            if (!current.left && !current.right) return depth
            if (current.left) arr.push(current.left)
            if (current.right) arr.push(current.right)
        }
        depth++
    }
};

var minDepth = function(root) {
    if (!root) return null
    let depth = 1
    let queue = [root]
    
    while (queue.length) {
        let constantLength = queue.length
        for (let i = 0; i < constantLength; i++) {
            let current = queue.shift()
            if (!current.left && !current.right) return depth
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        depth++
    }
};
