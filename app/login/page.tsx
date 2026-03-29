"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function login() {

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      alert(error.message)
    } else {
      window.location.href = "/dashboard"
    }

  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="space-y-4">

        <h1 className="text-3xl font-bold">Login</h1>

        <input
          type="email"
          placeholder="Email"
          className="p-2 text-black"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 text-black"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          className="bg-purple-600 px-4 py-2 rounded"
        >
          Login
        </button>

      </div>

    </div>

  )

}