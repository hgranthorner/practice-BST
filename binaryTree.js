class BinarySearchTree {
  constructor(value) {
    this.value = value
  }

  insert(value) {
    if (value < this.value && this.left) this.left.insert(value)
    if (value < this.value && !this.left) this.left = new BinarySearchTree(value)
    if (value > this.value && this.right) this.right.insert(value)
    if (value > this.value && !this.right) this.right = new BinarySearchTree(value)
  }

  depthFirst(fn, type) {
    if (type === 'inOrder') {
      if (this.left) this.left.depthFirst(fn, 'inOrder')
      fn(this.value)
      if (this.right) this.right.depthFirst(fn, 'inOrder')
    } else if (type === 'preOrder') {
      fn(this.value)
      if (this.left) this.left.depthFirst(fn, 'preOrder')
      if (this.right) this.right.depthFirst(fn, 'preOrder')
    } else if (type === 'postOrder') {
      if (this.left) this.left.depthFirst(fn, 'postOrder')
      if (this.right) this.right.depthFirst(fn, 'postOrder')
      fn(this.value)
    } else throw new Error('Please input a valid type of traversal')
  }
}

module.exports = BinarySearchTree
