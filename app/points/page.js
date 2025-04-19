"use client"

export default function Points() {
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
            className="fill-green-600 hover:cursor-pointer"
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

      {/* Content Section */}
      <div className="flex flex-col items-center bg-green-100 border-12 border-black rounded-lg w-[800px] h-auto py-12 px-10 shadow-lg mt-16">
        <h1 className="text-4xl font-bold mb-6">Your Points</h1>
        <p className="text-xl text-center">
          Track your points and redeem them for exciting rewards!
        </p>
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
