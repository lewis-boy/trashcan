"use client"
import React from "react"
import { submitContactForm } from "../actions"
import { useActionState } from "react"

export default function Login() {
  const [error, action, isLoading] = useActionState(submitContactForm, "")

  return (
    <form
      action={action}
      className="w-[368px] flex flex-col items-center justify-center gap-[1rem] my-0 mx-auto border-2 border-solid border-[var(--primary-color)] bg-[var(--bg-color)] rounded-lg"
    >
      <h2 className="py-[3rem] px-[1rem] block text-[2em] font-bold">Login</h2>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="Enter your email"
        className="border-2 border-solid border-[var(--primary-color)] rounded-lg py-[1rem] px-[1.5rem] w-[80%]"
      />
      <input
        type="password"
        id="password"
        name="password"
        required
        placeholder="Create a password"
        className="border-2 border-solid border-[var(--primary-color)] rounded-lg py-[1rem] px-[1.5rem] w-[80%]"
      />
      <button
        type="submit"
        className="border-2 border-solid border-[var(--primary-color)] rounded-lg py-[1rem] px-[2rem] w-[80%] bg-[var(--primary-color)] text-[var(--secondary-color)] text-xl"
      >
        {isLoading ? "Sending..." : "Login"}
      </button>

      {error && <p className="text-red-600 text-lg">{error}</p>}

      <p className="py-[3rem] px-[1rem] text-xl">
        Don't have an account?{" "}
        <a
          href="/signup"
          className="text-[var(--highlight-color)]"
        >
          Signup
        </a>
      </p>
    </form>
  )
}
