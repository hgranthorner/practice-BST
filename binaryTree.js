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
}

module.exports = BinarySearchTree
