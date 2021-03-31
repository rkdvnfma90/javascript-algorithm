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
  let cycle = false

  // union 로직을 실행한다.
  for (let [a, b] of unionInfo) {
    // 사이클이 발생하면 break
    if (findParent(parent, a) === findParent(parent, b)) {
      cycle = true
      break
    }
    // 사이클이 발생하지 않으면 union 실행
    unionParent(parent, a, b)
  }

  if (cycle) console.log('사이클 발생')
  else console.log('사이클 발생하지 않음')
}
