// 우선 순위 큐
class PriorityQueue {
  constructor() {
    this.heap = []
  }

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2)

  peek = () => this.heap[0]

  length = () => this.heap.length

  push = (key, value) => {
    const node = { key, value }
    this.heap.push(node)
    this.heapifyUp()
  }

  heapifyUp = () => {
    let index = this.heap.length - 1
    const lastInsertedNode = this.heap[index]

    while (index > 0) {
      const parentIndex = this.getParentIndex(index)

      if (this.heap[parentIndex].key <= lastInsertedNode.key) break

      this.heap[index] = this.heap[parentIndex]
      index = parentIndex
    }

    this.heap[index] = lastInsertedNode
  }

  pop = () => {
    const count = this.heap.length
    const rootNode = this.heap[0]

    if (count <= 0) return undefined
    if (count === 1) this.heap = []
    else {
      this.heap[0] = this.heap.pop()
      this.heapifyDown()
    }

    return rootNode
  }

  heapifyDown = () => {
    let index = 0
    const count = this.heap.length
    const rootNode = this.heap[index]

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index)
      const rightChildIndex = this.getRightChildIndex(index)

      const smallChildIndex =
        rightChildIndex < count &&
        this.heap[rightChildIndex].key < this.heap[leftChildIndex].key
          ? rightChildIndex
          : leftChildIndex

      if (this.heap[smallChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallChildIndex]
        index = smallChildIndex
      } else break
    }

    this.heap[index] = rootNode
  }
}

const [v, e] = [6, 11] // v(노드)와 e(간선)의 개수
const start = 1 // 시작 노드의 번호
const graph = Array.from(Array(v + 1), () => [])
const distance = Array(v + 1).fill(Number.MAX_SAFE_INTEGER) // 최단거리 테이블

/* 간선의 정보 입력 a에서 b로 가는 비용이 c라는 의미
const fs = require('fs')
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n')

const input = (() => {
  let line = 0
  return () => stdin[line++]
})()

for (let i = 0; i < e; i++) {
  const [a, b, c] = input().split(' ').map(Number)
  graph[a].push([b, c])
}
*/

graph[1].push([2, 2])
graph[1].push([3, 5])
graph[1].push([4, 1])
graph[2].push([3, 3])
graph[2].push([4, 2])
graph[3].push([2, 3])
graph[3].push([6, 5])
graph[4].push([3, 3])
graph[4].push([5, 1])
graph[5].push([3, 1])
graph[5].push([6, 2])

const q = new PriorityQueue()
const dijkstra = (start) => {
  q.push(0, start) // 시작 노드로 가기위한 최단 경로는 0으로 설정한다.
  distance[start] = 0

  while (q.length() > 0) {
    const { key: dist, value: now } = q.pop()

    // 최단거리에 테이블이 현재 노드까지의 거리보다 작으면 이미 처리된 것이기 때문에 pass
    if (distance[now] < dist) continue

    console.log(graph[now])
    // 현재 노드와 연결되어 있는 다른 인접한 노드들을 확인한다.
    for (let i of graph[now]) {
      console.log(i)
      const cost = dist + i[1]

      // 현재 노드를 거쳐 다른 노드로 이동하는 거리가 더 짧으면 최단거리 테이블 갱신
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost
        q.push(cost, i[0])
      }
    }
  }
}

dijkstra(start)

//최단거리 출력
for (let dist of distance) {
  if (dist === Number.MAX_SAFE_INTEGER) {
    console.log('Infinity')
  } else console.log(dist)
}
