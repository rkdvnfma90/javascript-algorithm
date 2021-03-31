class Queue {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  length() {
    return this.size
  }

  push(item) {
    const node = { item, next: null }
    if (this.head === null) {
      this.head = node
      this.head.next = this.tail
    } else {
      this.tail.next = node
    }

    this.tail = node
    this.size += 1
  }

  popLeft() {
    const popedItem = this.head

    if (popedItem === null) return null

    this.head = this.head.next
    this.size -= 1
    return popedItem.item
  }

  print() {
    let current = this.head
    while (current) {
      console.log(current.item)
      current = current.next
    }
  }
}
