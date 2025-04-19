"use client"
import React from "react"
import { submitContactForm } from "../actions"
import { useActionState } from "react"
import { useRouter } from "next/navigation" // Import useRouter

export default function Login() {
  const router = useRouter()
  const [error, action, isLoading] = useActionState(submitContactForm, "")

  return (
    <section className="flex flex-col justify-between items-center h-screen bg-green-700 bg-dots relative overflow-hidden">
      {/* Top Band */}
      <div className="w-full bg-green-500 border-t-12 border-b-12 border-black h-20 overflow-hidden">
        <div
          className="h-full w-full animate-scroll"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%237D4B2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path transform="rotate(-45 12 12)" d="M12 2C12 2 7 8 7 12c0 5 5 10 5 10s5-5 5-10c0-4-5-10-5-10z"></path><path transform="rotate(-45 12 12)" d="M12 2v20"></path></svg>')`,
            backgroundSize: "50px 50px",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>

      {/* Top-Left Tree */}
      <div className="absolute top-24 left-4">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width="80"
            height="80"
            className="fill-green-600"
          >
            <circle
              cx="32"
              cy="20"
              r="12"
              className="fill-green-500"
            />
            <circle
              cx="22"
              cy="30"
              r="10"
              className="fill-green-500"
            />
            <circle
              cx="42"
              cy="30"
              r="10"
              className="fill-green-500"
            />
            <rect
              x="28"
              y="30"
              width="8"
              height="20"
              className="fill-amber-950"
            />
          </svg>
        </a>
      </div>
      {/* Middle Section: Login Form */}
      <div className="flex flex-col items-center bg-green-100 border-12 border-black rounded-lg w-[800px] h-[600px] py-12 px-10 shadow-lg mt-16">
        <form
          action={action}
          className="w-full flex flex-col items-center justify-center gap-6"
        >
          <h2 className="text-6xl font-extrabold mb-6">Login</h2>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            className="border-5 border-solid border-[var(--primary-color)] rounded-lg py-3 px-4 w-[80%] text-lg"
          />
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Create a password"
            className="border-5 border-solid border-[var(--primary-color)] rounded-lg py-3 px-4 w-[80%] text-lg"
          />
          <button
            onClick={() => router.push("/points")}
            className="border-5 border-solid border-[var(--primary-color)] rounded-lg py-3 px-6 w-[80%] bg-[var(--primary-color)] text-[var(--secondary-color)] text-2xl hover:cursor-pointer hover:bg-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-colors duration-300 ease-in-out"
          >
            {isLoading ? "Sending..." : "Login"}
          </button>

          {error && <p className="text-red-600 text-lg">{error}</p>}

          <p className="text-xl mt-6">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-[var(--highlight-color)]"
            >
              Signup
            </a>
          </p>
        </form>
      </div>
      {/* Bottom Band */}
      <div className="w-full bg-green-500 border-t-12 border-b-12 border-black h-20 overflow-hidden">
        <div
          className="h-full w-full animate-scroll"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%237D4B2A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path transform="rotate(-45 12 12)" d="M12 2C12 2 7 8 7 12c0 5 5 10 5 10s5-5 5-10c0-4-5-10-5-10z"></path><path transform="rotate(-45 12 12)" d="M12 2v20"></path></svg>')`,
            backgroundSize: "50px 50px",
            backgroundRepeat: "repeat",
          }}
        ></div>
      </div>
    </section>
  )
}
