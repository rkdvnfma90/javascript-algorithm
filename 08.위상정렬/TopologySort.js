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

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let [v, e] = [null, null]
let graphInfo = []
let count = 0
rl.on('line', (line) => {
  if (!v && !e) [v, e] = line.split(' ').map(Number)
  else {
    graphInfo.push(line.split(' ').map(Number))
    count += 1
  }

  if (e === count) rl.close()
}).on('close', () => {
  solution(v, e, graphInfo)
  process.exit()
})

const solution = (v, e, graphInfo) => {
  const indegree = Array(v + 1).fill(0) // 진입차수 0으로 초기화
  const graph = Array.from(Array(v + 1), () => [])
  const result = []
  const q = new Queue()

  // 간선 정보 입력받기
  for (let [a, b] of graphInfo) {
    graph[a].push(b)
    indegree[b] += 1 // a에서 b로 가는 경로가 있기 때문에 b의 진입차수를 1 증가시킨다.
  }

  // 진입차수가 0인 노드를 큐에 넣는다.
  for (let i = 1; i < v + 1; i++) {
    if (indegree[i] === 0) q.push(i)
  }

  // 큐가 빌 때까지 반복한다.
  while (!q.isEmpty()) {
    now = q.popLeft()
    result.push(now)

    // 해당 노드와 연결된 노드들의 진입차수를 1 뺀다.
    for (let g of graph[now]) {
      indegree[g] -= 1

      if (indegree[g] === 0) q.push(g)
    }
  }

  result.forEach((data, index) => {
    if (index !== 1) console.log(data)
  })
}
