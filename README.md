# 자바스크립트 자료구조 & 알고리즘

## 파이썬의 input 처럼 입력받기

```javascript
const fs = require('fs')
const stdin = fs.readFileSync('/dev/stdin').toString().split('\n')

const input = (() => {
  let line = 0
  return () => stdin[line++]
})()

let t = input()
while (t--) {
  const [a, b] = input().split(' ').map(Number)
  console.log(a + b)
}
```
