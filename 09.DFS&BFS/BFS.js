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

const BFS = () => {
  const start = 1
  const visited = []
  const bfs = []

  // 시작점을 큐에 넣고, 방문처리 함
  bfs.push(start)
  visited.push(start)

  while (bfs.length > 0) {
    const now = bfs.shift()

    // 현재 노드와 연결된 노드가 방문하지 않았으면 방문처리 함
    for (let g of graph[now]) {
      if (!visited.includes(g)) {
        bfs.push(g)
        visited.push(g)
      }
    }
  }

  return visited
}

BFS()
