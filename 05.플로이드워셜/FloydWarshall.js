const [v, e] = [4, 7] // 노드와 간선의 개수
const INF = Number.MAX_SAFE_INTEGER
const graph = Array.from(Array(v + 1), () => Array(v + 1).fill(INF)) // 노드와 연결된 간선의 비용을 2차원 배열에 무한대로 초기화함

// 자기 자신으로 가는 비용은 0으로 초기화 한다.
for (let i = 1; i < v + 1; i++) {
  for (let j = 1; j < v + 1; j++) {
    if (i === j) graph[i][j] = 0
  }
}

// 간선에 대한 정보를 입력받는다.
// for (let i = 0; i < e; i ++) {
//   const [a, b, c] = [1, 2, 4]
//   graph[a][b] = c
// }

graph[1][2] = 4
graph[1][4] = 6
graph[2][1] = 3
graph[2][3] = 7
graph[3][1] = 5
graph[3][4] = 4
graph[4][3] = 2

for (let k = 1; k < v + 1; k++) {
  for (let a = 1; a < v + 1; a++) {
    for (let b = 1; b < v + 1; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b])
    }
  }
}

console.log(graph)
