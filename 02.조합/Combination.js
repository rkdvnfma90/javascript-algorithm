const getCombinations = (arr, number) => {
  const result = []

  // 1개를 선택할 경우 arr의 모든 원소를 길이가 1인 배열로 리턴
  if (number === 1) return arr.map((data) => [data])

  arr.forEach((now, index, origin) => {
    const rest = origin.slice(index + 1) // 현재 확인하고 있는 값을 제외한 나머지 값
    const combinations = getCombinations(rest, number - 1) // 나머지값에 대해서 조합을 재귀로 또 구한다.
    const added = combinations.map((combination) => [now, ...combination]) // 나머지값에 대해서 구한 조합 값을 현재 확인하고 있는 값과 합쳐준다.
    result.push(...added)
  })

  return result
}
