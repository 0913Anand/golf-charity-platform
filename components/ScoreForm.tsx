"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function ScoreForm({ userId }){

const [score,setScore] = useState("")
const [date,setDate] = useState("")

async function addScore(){

const { data } = await supabase
.from("scores")
.select("*")
.eq("user_id",userId)
.order("date")

if(data.length >= 5){

await supabase
.from("scores")
.delete()
.eq("id",data[0].id)

}

await supabase
.from("scores")
.insert({user_id:userId,score,date})

}

return (

<div className="space-y-4">

<input
type="number"
placeholder="Score"
onChange={e=>setScore(e.target.value)}
/>

<input
type="date"
onChange={e=>setDate(e.target.value)}
/>

<button
onClick={addScore}
className="bg-green-500 px-4 py-2 rounded"
>

Submit Score

</button>

</div>

)

}