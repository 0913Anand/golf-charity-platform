"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function SignupPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function signup() {

    const { error } = await supabase.auth.signUp({
      email,
      password
    })

    if (error) {
      alert(error.message)
    } else {
      alert("Account created!")
      window.location.href = "/login"
    }

  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-black text-white">

      <div className="space-y-4">

        <h1 className="text-3xl font-bold">Signup</h1>

        <input
          type="email"
          placeholder="Email"
          className="p-2 text-black"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 text-black"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={signup}
          className="bg-purple-600 px-4 py-2 rounded"
        >
          Create Account
        </button>

      </div>

    </div>

  )

}