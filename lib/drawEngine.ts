export function weightedDraw(scores: number[]) {

  const frequency: Record<number, number> = {}

  scores.forEach(score => {
    frequency[score] = (frequency[score] || 0) + 1
  })

  const weightedPool: number[] = []

  Object.entries(frequency).forEach(([score, count]) => {

    for (let i = 0; i < count; i++) {
      weightedPool.push(Number(score))
    }

  })

  const draw: number[] = []

  while (draw.length < 5) {

    const randomScore =
      weightedPool[Math.floor(Math.random() * weightedPool.length)]

    if (!draw.includes(randomScore)) {
      draw.push(randomScore)
    }

  }

  return draw
}