const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
]

// 스택 사용
const DFS = () => {
  const start = 1
  const visited = []
  let dfs = []

  dfs.push(start)

  while (dfs.length > 0) {
    const now = dfs.pop()

    // 현재 노드와 연결된 노드가 방문하지 않았으면 방문처리 함
    if (!visited.includes(now)) {
      visited.push(now)

      // 현재 노드와 인접한 노드 스택에 삽입
      dfs = [...dfs, ...graph[now]]
    }
  }
  return visited
}

// 재귀 사용
const visited = []
const start = 1

const DFS = (graph, v, visited) => {
  // 현재 노드 방문처리
  visited.push(v)

  // 현재 노드와 연결된 다른 노드를 재귀로 방문함
  for (let g of graph[v]) {
    // 방문처리 되어 있지 않으면 재귀로 방문
    if (!visited.includes(g)) DFS(graph, g, visited)
  }

  return visited
}

DFS(graph, start, visited)
