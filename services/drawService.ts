import { weightedDraw } from "@/lib/weightedDraw"
import { supabase } from "@/lib/supabase"

export async function runDraw() {

  const { data, error } = await supabase
    .from("scores")
    .select("score")

  if (error) throw error

  const scores = (data ?? []).map((s) => s.score)

  return weightedDraw(scores)
}