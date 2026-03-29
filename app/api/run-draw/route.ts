import { weightedDraw } from "@/lib/drawEngine"
import { supabase } from "@/lib/supabase"

export async function POST() {

  const { data } = await supabase
    .from("scores")
    .select("score")

  const scores = data.map(s => s.score)

  const numbers = weightedDraw(scores)

  await supabase
    .from("draws")
    .insert({
      month: "April",
      numbers
    })

  return Response.json({ numbers })

}