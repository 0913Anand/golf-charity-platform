export function weightedDraw(scores: number[], drawCount: number = 5): number[] {

  if (!scores || scores.length === 0) {
    throw new Error("No scores available for draw")
  }

  // Normalize scores so higher scores have better probability
  const total = scores.reduce((sum, score) => sum + score, 0)

  const weightedPool: number[] = []

  scores.forEach((score, index) => {
    const weight = Math.max(1, Math.floor((score / total) * 100))

    for (let i = 0; i < weight; i++) {
      weightedPool.push(index)
    }
  })

  const results = new Set<number>()

  while (results.size < drawCount && weightedPool.length > 0) {
    const randomIndex = Math.floor(Math.random() * weightedPool.length)
    results.add(weightedPool[randomIndex])
  }

  return Array.from(results)
}