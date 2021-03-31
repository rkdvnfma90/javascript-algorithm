class Node {
  constructor(value) {
    this.next = null
    this.value = value
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  push(value) {
    let node = new Node(value)
    if (this.size == 0) {
      this.head = node
    } else {
      this.tail.next = node
    }
    this.tail = node
    this.size++
  }

  popLeft() {
    if (this.size == 0) {
      return null
    }
    let value = this.head.value
    this.head = this.head.next
    this.size--
    if (this.size == 0) {
      this.tail = null
    }
    return value
  }

  isEmpty() {
    return this.size == 0
  }
}
