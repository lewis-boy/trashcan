"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation" // Import useRouter
import { Bungee_Spice } from "next/font/google"

const bungeeSpice = Bungee_Spice({
  subsets: ["latin"],
  weight: ["400"], // Bungee Spice only supports 400 weight
})

export default function Input() {
  const router = useRouter() // Initialize the router
  const [showSlotMachine, setShowSlotMachine] = useState(false) // State to toggle slot machine
  const [slotResult, setSlotResult] = useState(null) // State to store the final result

  const handleSubmit = () => {
    setShowSlotMachine(true) // Start the animation
    setTimeout(() => {
      const randomNumber = Math.floor(100 + Math.random() * 900) // Generate a random 3-digit number
      setSlotResult(randomNumber) // Set the result
    }, 3000) // Simulate spinning for 3 seconds
  }

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

      {/* Middle Section */}
      <div className="flex flex-col items-center bg-green-100 border-12 border-black rounded-lg w-[500px] h-auto py-12 px-10 shadow-lg mt-16 relative overflow-hidden">
        <>
          {/* Email Input */}
          <div className="relative w-full mb-8">
            <label
              htmlFor="email"
              className="text-lg font-bold text-black block text-center mb-2"
            >
              Enter your email:
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border-2 border-black rounded-lg"
                placeholder="example@example.com"
              />
            </div>
          </div>

          {/* Trash Selection */}
          <div className="flex flex-col items-start w-full mb-8 ">
            <p className="text-lg font-bold text-black mb-6">
              Select types of trash you're depositing:
            </p>
            <label className="flex items-center mb-4">
              <input
                type="checkbox"
                className="appearance-none w-6 h-6 rounded-full border-4 border-black checked:bg-green-500 checked:border-green-500 checked:after:content-['✔'] checked:after:text-white checked:after:block checked:after:text-center"
                name="trash-type"
                value="paper"
              />
              <span className="ml-2">Paper</span>
            </label>
            <label className="flex items-center mb-4">
              <input
                type="checkbox"
                className="appearance-none w-6 h-6 rounded-full border-4 border-black checked:bg-green-500 checked:border-green-500 checked:after:content-['✔'] checked:after:text-white checked:after:block checked:after:text-center"
                name="trash-type"
                value="cardboard"
              />
              <span className="ml-2">Cardboard</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="appearance-none w-6 h-6 rounded-full border-4 border-black checked:bg-green-500 checked:border-green-500 checked:after:content-['✔'] checked:after:text-white checked:after:block checked:after:text-center"
                name="trash-type"
                value="plastic"
              />
              <span className="ml-2">Plastic</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-between w-full">
            <button
              className="px-6 py-2 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition"
              onClick={() => router.push("/deposit")} // Navigate back to the deposit page
            >
              Cancel
            </button>
            <button
              className="px-6 py-2 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition"
              onClick={handleSubmit} // Start slot machine
            >
              Submit
            </button>
          </div>
        </>
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
