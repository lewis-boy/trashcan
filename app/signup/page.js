"use client"
import React from "react"
import { submitContactForm } from "../actions"
import { useActionState } from "react"

export default function Signup() {
  const [error, action, isLoading] = useActionState(submitContactForm, "")

  return (
    <form className="w-[368px] flex flex-col items-center justify-center gap-[1rem] my-0 mx-auto border-2 border-solid border-[var(--primary-color)] bg-[var(--bg-color)] rounded-lg">
      <h2 className="py-[3rem] px-[1rem]">Signup</h2>
      <input
        type="email"
        id="email"
        name="email"
        required
        placeholder="Enter your email"
        className="border-2 border-solid border-[var(--primary-color)] rounded-lg py-[1rem] px-[1.5rem] form-input"
      />
      <input
        type="password"
        id="password"
        name="password"
        required
        placeholder="Create a password"
        className="border-2 border-solid border-[var(--primary-color)] rounded-lg py-[1rem] px-[1.5rem] form-input"
      />
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        required
        placeholder="Confirm your password"
        className="border-2 border-solid border-[var(--primary-color)] rounded-lg py-[1rem] px-[1.5rem] form-input"
      />
      <button
        type="submit"
        className="border-2 border-solid border-[var(--primary-color)] rounded-lg py-[1rem] px-[2rem] w-[80%] bg-[var(--primary-color)] text-[var(--secondary-color)] form-input"
      >
        {isLoading ? "Sending..." : "Send"}
      </button>

      {error && <p className="text-red-600 text-sm">{error}</p>}

      <p className="py-[3rem] px-[1rem]">
        Already have an account?{" "}
        <a
          href="/login"
          className="text-[var(--highlight-color)]"
        >
          Login
        </a>
      </p>
    </form>
  )
}
