"use client"

export default function Admin(){

async function runDraw(){

await fetch("/api/run-draw",{
method:"POST"
})

alert("Draw generated")

}

return(

<div>

<h1>Admin Panel</h1>

<button onClick={runDraw}>
Run Weighted Draw
</button>

</div>

)

}