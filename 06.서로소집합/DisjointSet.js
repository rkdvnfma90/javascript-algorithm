// target의 부모 노드를 찾는다.
const findParent = (parent, target) => {
  if (parent[target] != target)
    parent[target] = findParent(parent, parent[target])
  return parent[target]
}

// a와 b를 같은 집합으로 만든다.
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
let unionInfo = []
let count = 0
rl.on('line', (line) => {
  if (!v && !e) [v, e] = line.split(' ').map(Number)
  else {
    unionInfo.push(line.split(' ').map(Number))
    count += 1
  }

  if (e === count) rl.close()
}).on('close', () => {
  solution(v, e, unionInfo)
  process.exit()
})

const solution = (v, e, unionInfo) => {
  // 부모 테이블은 자기 자신으로 초기화한다.
  const parent = Array.from(Array(v + 1).fill(0)).map((data, index) => index)

  // union 로직을 실행한다.
  for (let [a, b] of unionInfo) {
    unionParent(parent, a, b)
  }

  // findParent를 실행함으로써 부모 테이블값을 갱신한다.
  for (let i = 1; i < v + 1; i++) findParent(parent, i)

  console.log(parent)
}
