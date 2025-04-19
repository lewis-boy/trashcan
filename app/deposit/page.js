"use client"
import React from "react"
import { useRouter } from "next/navigation" // Import useRouter
import { Bungee_Spice } from "next/font/google"

const bungeeSpice = Bungee_Spice({
  subsets: ["latin"],
  weight: ["400"], // Bungee Spice only supports 400 weight
})

export default function Deposit() {
  const router = useRouter() // Initialize the router

  return (
    <section className="flex flex-col justify-between items-center h-screen bg-green-700 bg-dots relative">
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

      {/* Middle Section: Howdy and Button */}
      <div className="flex flex-col items-center bg-green-100 border-12 border-black rounded-lg w-[400px] h-[600px] pt-8 shadow-lg mt-20">
        <h1
          className={`text-6xl font-bold text-black ${bungeeSpice.className}`}
        >
          Howdy!
        </h1>
        <div className="w-full bg-green-500 border-t-12 border-b-12 border-black h-20 overflow-hidden mt-8 mb-16"></div>
        <button
          className={`${bungeeSpice.className} px-6 py-6 rounded-full bg-white text-green-600 font-bold text-xl shadow-lg hover:bg-green-100 hover:scale-105 transition-transform duration-300 ease-in-out mt-4`}
          onClick={() => router.push("/input")} // Navigate to the input page
        >
          🌱 Start Trash Deposit 🌿
        </button>
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
