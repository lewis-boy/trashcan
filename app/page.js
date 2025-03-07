import Image from "next/image"

export default function Home() {
  return (
    <div className="flex items-center justify-items-center mx-auto min-h-screen pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center sm:items-start">
        <section>
          <div className="h-[92vh] md:h-[95vh] flex flex-col justify-center md:content-center md:text-center mx-auto py-[2rem]">
            <h1 className="font-bold text-4xl my-4">
              A Cleaner World,{" "}
              <span className="hidden">
                <br />
              </span>
              A Fuller Wallet
            </h1>
            <p className="my-[1rem] mx-0 text-xl leading-normal">
              Dispose of trash, earn points, and redeem them for exciting
              rewards. The more you clean, the more you win.
            </p>
            <div>
              <ul className="flex justify-center gap-[1rem] mt-[1rem] mx-0 mb-[12.5rem] list-none md:mb-[5rem]">
                <li>
                  <a
                    href="#info"
                    className="text-xl no-underline text-current border-2 border-[var(--primary-color)] rounded py-1 px-2 page-btn-links hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)]"
                  >
                    Learn More
                  </a>
                </li>
                <li>
                  <a
                    href="/signup"
                    className="text-xl no-underline text-current border-2 border-[var(--primary-color)] rounded py-1 px-2 page-btn-links hover:bg-[var(--primary-color)] hover:text-[var(--secondary-color)]"
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
  )
}
