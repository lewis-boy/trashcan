import Image from "next/image"

export default function Home() {
  return (
    <section className="flex flex-col justify-between items-center h-screen bg-green-700 bg-dots relative overflow-hidden">
      {/* Top-Left Tree */}
      <div className="absolute top-4 left-4">
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
      </div>

      {/* Top-Right Buttons */}
      <div className="absolute top-4 right-4 flex gap-4">
        <a
          href="/login"
          className="bg-white text-green-600 text-lg font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 hover:text-white  transition"
        >
          Login
        </a>
        <a
          href="/signup"
          className="bg-white text-green-600 text-lg font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-700 hover:text-white transition"
        >
          Signup
        </a>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col items-center justify-center h-full w-full">
        <main className="flex flex-col items-center sm:items-start">
          <section>
            <div className="text-green-100 h-[92vh] md:h-[95vh] flex flex-col justify-center md:content-center md:text-center mx-auto py-[2rem]">
              <h1 className="font-bold text-6xl my-4 text-center">
                A Cleaner World,{" "}
                <span className="hidden">
                  <br />
                </span>
                A Fuller Wallet
              </h1>
              <p className="my-[1rem] mx-0 text-2xl text-wrap w-[900px] leading-normal text-center">
                Dispose of trash, earn points, and redeem them for exciting
                rewards. The more you clean, the more you win.
              </p>
              <div>
                <ul className="flex justify-center gap-[1rem] mt-[1rem] mx-0 mb-[12.5rem] list-none md:mb-[5rem]">
                  <li>
                    <a
                      href="#info"
                      className="bg-green-600 text-xl no-underline text-current border-5 border-green-50 rounded py-1 px-2 page-btn-links hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)]"
                    >
                      Learn More
                    </a>
                  </li>
                  <li>
                    <a
                      href="/deposit"
                      className="bg-green-600 text-xl no-underline text-current border-5 border-green-50 rounded py-1 px-2 page-btn-links hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)]"
                    >
                      Start Earning
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  )
}
