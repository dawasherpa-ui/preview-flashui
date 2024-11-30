import React from 'react'

function Page() {
  return (
    <main className="relative w-full h-full">
    <div
        className="absolute top-0 left-0 w-full h-full content-[''] z-10 pointer-events-none bg-[url('https://res.cloudinary.com/dpb8r7bqq/image/upload/v1732936234/RpdD_grqwvx.gif')]"
        style={{ opacity: 0.08 }}
      ></div>
     <section className=" size-full font-semibold bg-gradient-to-t dark:to-gray-800 dark:from-gray-950 to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center dark:text-white text-black">
        <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              A Page with Noise Effect
        </h1>
      </section>
  
  </main>  
  )
}

export default Page
