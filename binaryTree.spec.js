const BinarySearchTree = require('./binaryTree')

describe('class BinarySearchTree', () => {

  let BST
  beforeEach(() => {
    BST = new BinarySearchTree(10)
  })

  it('exists', () => {
    expect(BinarySearchTree).toBeTruthy()
  })
  it('creates an object with value properties', () => {
    expect(BST.value).toBeTruthy()
    expect(BST.value).toBe(10)
  })
  it('has the insert method', () => {
    expect(BST.insert).toBeTruthy()
  })
  it('can insert values into a left or right node appropriately', () => {
    BST.insert(5)
    expect(BST.left.value).toBe(5)
    BST.insert(15)
    expect(BST.right.value).toBe(15)
  })
  it('can recursively add values to the left and right nodes', () => {
    BST.insert(5)
    BST.insert(2)
    expect(BST.left.left.value).toBe(2)
    BST.insert(15)
    BST.insert(12)
    expect(BST.right.left.value).toBe(12)
  })
  it('can search through inOrder', () => {
    const testArr = []
    const addEachNode = (val) => {
      testArr.push(val)
    }
    BST.insert(5)
    BST.insert(2)
    BST.insert(15)
    BST.insert(12)
    BST.depthFirst(addEachNode,'inOrder')
    expect(testArr).toEqual([2,5,10,12,15])
  })
  it('can search through preOrder', () => {
    const testArr = []
    const addEachNode = (val) => {
      testArr.push(val)
    }
    BST.insert(5)
    BST.insert(2)
    BST.insert(15)
    BST.insert(12)
    BST.depthFirst(addEachNode,'preOrder')
    expect(testArr).toEqual([10, 5, 2, 15, 12])
  })
  it('can search through postOrder', () => {
    const testArr = []
    const addEachNode = (val) => {
      testArr.push(val)
    }
    BST.insert(5)
    BST.insert(2)
    BST.insert(15)
    BST.insert(12)
    BST.depthFirst(addEachNode,'postOrder')
    expect(testArr).toEqual([2,5,12,15,10])
  })
})
