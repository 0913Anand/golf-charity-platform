"use client"

import { motion } from "framer-motion"

export default function Home() {

return (

<main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

<motion.h1
initial={{opacity:0,y:30}}
animate={{opacity:1,y:0}}
className="text-6xl font-bold mb-6"
>

Play Golf. Win Big. Change Lives.

</motion.h1>

<p className="text-lg mb-10">
Track scores • Join monthly draw • Support charities
</p>

<a
href="/signup"
className="bg-purple-600 px-6 py-3 rounded-lg"
>

Subscribe Now

</a>

</main>

)

}