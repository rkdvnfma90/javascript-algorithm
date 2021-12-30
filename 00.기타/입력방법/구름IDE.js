// 구름 ide 여러줄 입력받기
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  const n = input[0]
  const arr = input[1].split(' ').map(Number)
  const [start, end] = input[2].split(' ').map(Number)

  process.exit()
})
