"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

interface ScoreFormProps {
  userId: string
}

export default function ScoreForm({ userId }: ScoreFormProps) {

  const [score, setScore] = useState("")
  const [date, setDate] = useState("")

  async function submitScore() {

    const { error } = await supabase.from("scores").insert({
      user_id: userId,
      score: Number(score),
      date
    })

    if (error) {
      alert(error.message)
    } else {
      alert("Score submitted")
    }

  }

  return (
    <div className="space-y-3">
      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        className="border p-2"
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2"
      />

      <button
        onClick={submitScore}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit Score
      </button>
    </div>
  )
}