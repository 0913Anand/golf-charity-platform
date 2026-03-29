import { useState } from "react"
import { supabase } from "@/lib/supabase"

interface ScoreFormProps {
  userId: string
}

export default function ScoreForm({ userId }: ScoreFormProps) {

  const [score, setScore] = useState("")
  const [date, setDate] = useState("")

  async function submitScore() {

    await supabase.from("scores").insert({
      user_id: userId,
      score: Number(score),
      date
    })

  }

}