# 자바스크립트 자료구조 & 알고리즘

## 여러줄 입력

```javascript
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let graph = []
let [n, m] = [null, null]
let count = 0

rl.on('line', function (line) {
  // n, m을 여러줄로 나눠서 입력할 경우
  if (!n) n = parseInt(line)
  else if (!m) m = parseInt(line)
  else {
    graph.push(line.split(' ').map((data) => data))
    count += 1
  }

  if (n === count) rl.close()
}).on('close', function () {
  solution(n, m, graph)
  process.exit()
})

const solution = (n, m, graph) => {
  console.log(n, m, graph)
}
```
