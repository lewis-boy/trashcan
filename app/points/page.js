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
      <div className="relative flex flex-col items-center bg-green-100 border-12 border-black rounded-lg w-[800px] h-auto py-12 px-10 shadow-lg mt-16">
        {/* Top-Left Sun */}
        <div className="absolute top-2 left-2 animate-spin-slow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="40"
            height="40"
            className="stroke-red-500 fill-none"
          >
            <circle
              cx="12"
              cy="12"
              r="4"
              fill="none"
              strokeWidth="2"
            />
            <line
              x1="12"
              y1="2"
              x2="12"
              y2="6"
            />
            <line
              x1="12"
              y1="18"
              x2="12"
              y2="22"
            />
            <line
              x1="2"
              y1="12"
              x2="6"
              y2="12"
            />
            <line
              x1="18"
              y1="12"
              x2="22"
              y2="12"
            />
            <line
              x1="4.2"
              y1="4.2"
              x2="6.8"
              y2="6.8"
            />
            <line
              x1="17.2"
              y1="17.2"
              x2="19.8"
              y2="19.8"
            />
            <line
              x1="4.2"
              y1="19.8"
              x2="6.8"
              y2="17.2"
            />
            <line
              x1="17.2"
              y1="6.8"
              x2="19.8"
              y2="4.2"
            />
          </svg>
        </div>

        {/* Top-Right Sun */}
        <div className="absolute top-2 right-2 animate-spin-slow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="40"
            height="40"
            className="stroke-red-500 fill-none"
          >
            <circle
              cx="12"
              cy="12"
              r="4"
              fill="none"
              strokeWidth="2"
            />
            <line
              x1="12"
              y1="2"
              x2="12"
              y2="6"
            />
            <line
              x1="12"
              y1="18"
              x2="12"
              y2="22"
            />
            <line
              x1="2"
              y1="12"
              x2="6"
              y2="12"
            />
            <line
              x1="18"
              y1="12"
              x2="22"
              y2="12"
            />
            <line
              x1="4.2"
              y1="4.2"
              x2="6.8"
              y2="6.8"
            />
            <line
              x1="17.2"
              y1="17.2"
              x2="19.8"
              y2="19.8"
            />
            <line
              x1="4.2"
              y1="19.8"
              x2="6.8"
              y2="17.2"
            />
            <line
              x1="17.2"
              y1="6.8"
              x2="19.8"
              y2="4.2"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold mb-6">Your Points</h1>
        <p className="text-8xl font-extrabold text-green-600">
          480<span className="text-2xl font-normal text-black"> pts</span>
        </p>
        <p className="text-xl text-center mt-4">
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
