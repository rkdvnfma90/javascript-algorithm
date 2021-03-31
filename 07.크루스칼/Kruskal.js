const findParent = (parent, target) => {
  if (parent[target] != target)
    parent[target] = findParent(parent, parent[target])
  return parent[target]
}

const unionParent = (parent, a, b) => {
  a = findParent(parent, a)
  b = findParent(parent, b)

  if (a < b) parent[b] = a
  else parent[a] = b
}

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// 노드의 개수 v, 간선의 개수 e
let [v, e] = [null, null]
let edgeInfo = []
let count = 0
rl.on('line', (line) => {
  if (!v && !e) [v, e] = line.split(' ').map(Number)
  else {
    edgeInfo.push(line.split(' ').map(Number))
    count += 1
  }

  if (e === count) rl.close()
}).on('close', () => {
  solution(v, e, edgeInfo)
  process.exit()
})

const solution = (v, e, edgeInfo) => {
  // 부모 테이블은 자기 자신으로 초기화한다.
  const parent = Array.from(Array(v + 1).fill(0)).map((data, index) => index)
  const edges = []
  let result = 0

  // 간선의 정보 입력 (a에서 b로 가는 비용이 cost)
  for (let [a, b, cost] of edgeInfo) {
    edges.push({ cost, a, b })
  }

  edges.sort((a, b) => a.cost - b.cost)

  for (let { cost, a, b } of edges) {
    // 사이클이 발생하지 않으면 같은 집합으로 만들고 cost 누적
    if (findParent(parent, a) !== findParent(parent, b)) {
      unionParent(parent, a, b)
      result += cost
    }
  }

  console.log(result)
}
