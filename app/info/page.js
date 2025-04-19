"use client"

export default function Info() {
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
      <div className="flex flex-col items-center bg-green-100 border-12 border-black rounded-lg w-[800px] h-auto py-8 px-10 shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">How It Works</h1>
        <ul className="text-xl text-left list-disc list-inside mb-8 w-[700px]">
          <li>Dispose of trash at designated trash cans</li>
          <li>Earn points for every piece of trash you dispose</li>
          <li>Use your points to redeem gift cards</li>
        </ul>
        <h1 className="text-4xl font-bold mb-6 text-center">
          Why Participate?
        </h1>
        <ul className="text-xl text-left list-disc list-inside mb-8">
          <li>
            Every piece of trash you pick up helps reduce pollution and protect
            the environment
          </li>
          <li>Earn points for your efforts and redeem them for gift cards</li>
          <li>
            Join a growing community, working together to make the world a
            better place
          </li>
        </ul>
        <h1 className="text-4xl font-bold mb-6 text-center">Our Mission</h1>
        <ul className="text-xl text-left list-disc list-inside mb-8 w-[700px]">
          <li>Reduce pollution and landfill waste</li>
          <li>Promote recycling and sustainable practices</li>
          <li>
            Empower individuals to take action and be rewarded for their efforts
          </li>
        </ul>
        <p className="text-center text-lg mt-8">©2025 Eco Loco</p>
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
