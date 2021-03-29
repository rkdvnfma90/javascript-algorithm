class PriorityQueue {
  constructor() {
    this.heap = []
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2)

  peek = () => this.heap[0]

  // 요소를 넣고 min heap구조로 만든다.
  push = (key, value) => {
    const node = { key, value }
    this.heap.push(node)
    this.heapifyUp()
  }

  heapifyUp = () => {
    let lastInsertedIndex = this.heap.length - 1
    const lastInsertedNode = this.heap[lastInsertedIndex]

    // 마지막 삽입 인덱스가 루트노드 (0) 이 될때까지 반복한다.
    while (lastInsertedIndex > 0) {
      const parentIndex = this.getParentIndex(lastInsertedIndex)

      // 마지막으로 삽입된 key 값이 부모요소보다 크면 더이상 변경할 필요가 없다.
      if (this.heap[parentIndex].key <= lastInsertedNode.key) break

      // 부모 노드의 key 값이 크다면 부모를 아래로 내린다.
      this.heap[lastInsertedIndex] = this.heap[parentIndex]
      lastInsertedIndex = parentIndex
    }

    // break되어 마지막으로 삽입된 노드가 자신의 자리에 위치하게 됨.
    // lastInsertedIndex가 가장 마지막에 찾아진 곳이므로 여기에 해당 노드가 들어간다.
    this.heap[lastInsertedIndex] = lastInsertedNode
  }

  pop = () => {
    const count = this.heap.length
    const rootNode = this.heap[0]

    if (count <= 0) return undefined
    if (count === 1) this.heap = []
    else {
      // 맨 끝에 있는 노드를 부모로 만들고 min heap구조로 만든다.
      this.heap[0] = this.heap.pop()
      this.heapifyDown()
    }

    return rootNode
  }

  heapifyDown = () => {
    let index = 0
    const count = this.heap.length
    const rootNode = this.heap[index]

    // left child가 있을 때 까지 검사한다.
    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index)
      const rightChildIndex = this.getRightChildIndex(index)

      // 왼쪽, 오른쪽 중 더 작은 인덱스 값을 구한다.
      const smallChildIndex =
        rightChildIndex < count &&
        this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex

      // 자식 노드의 값이 루트노드보다 작으면 위로 끌어올린다.
      if (this.heap[smallChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallChildIndex]
        index = smallChildIndex
      } else break
    }

    this.heap[index] = rootNode
  }
}
