const arr = []

for (let i = 0; i <= 100000; i++) {
  arr.push(i)
}

const binarySearch = (data, target) => {
  let left = 0
  let right = data.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (data[mid] === target) return data[mid]
    else if (data[mid] > target) right = mid - 1
    else left = mid + 1
  }

  return null
}

binarySearch(arr, 3000)
