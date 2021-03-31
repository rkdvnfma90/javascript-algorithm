# 화성탐사 문제 (2차원 배열 다익스트라)

```javascript
const n = 3 // 맵 크기
const graph = Array.from(Array(3), () => [])
const [x, y] = [0, 0] // 시작지점 좌표
const INF = Number.MAX_SAFE_INTEGER

const dx = [0, 1, 0, -1]
const dy = [1, 0, -1, 0]

const distance = Array.from(Array(3), () => Array(3).fill(INF)) // 최단거리 테이블 초기화

const q = new PriorityQueue()

// 맵 정보 입력
graph[0].push(5, 5, 4)
graph[1].push(3, 9, 1)
graph[2].push(3, 2, 7)

q.push(graph[0][0], [x, y]) // 시작점의 소모량과 좌표
distance[0][0] = graph[0][0] // 시작점의 최단거리 테이블 값을 소모량으로 갱신함

while (q.length() > 0) {
  const {
    key: dist, // 소모량
    value: [x, y], // 좌표
  } = q.pop()

  // 이미 처리된 적 있으면 pass
  if (distance[x][y] < dist) continue

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i]
    const ny = y + dy[i]

    // 범위를 벗어나는 경우 pass
    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue

    // 현재 위치를 지나 인접한 노드까지의 소모량
    const cost = dist + graph[nx][ny]

    // 인접한 다음 위치 까지의 비용이 최단거리 테이블의 값보다 작으면 갱신하고 우선순위 큐에 push
    if (distance[nx][ny] > cost) {
      distance[nx][ny] = cost
      q.push(cost, [nx, ny])
    }
  }
}

// 목적지의 최적 소모량
console.log(distance[n - 1][n - 1])
```
