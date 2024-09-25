import React from "react";
type Props = {};

export default async function Page({}: Props) {
  return (
    <section className="bg-zinc-900 py-20">
      <div className="w-full lg:w-9/12 mx-auto flex flex-col items-center gap-8">
        <button
          type="button"
          className=" text-orange-500 px-4  hover:bg-zinc-800  border border-zinc-600 rounded-full text-sm flex items-center gap-4">
          Announcing Early Adopters Plan
          <IconArrowRightShort
            height={22}
            width={22}
          />{" "}
        </button>

        <p className="text-zinc-100 w-full  lg:w-9/12 text-4xl  md:text-6xl text-center">Take your business online with personalized e-commerce solutions</p>
        <p className=" text-zinc-400  md:w-7/12 text-center">We offer custom designs, social media integration, SEO, payment gateways, sales reports, mobile-friendly designs, automated inventory management and comprehensive admin panels.</p>

        <div className=" space-x-4 flex items-center">
          <button
            type="button"
            className="px-4 py-2 text-white bg-orange-600 rounded-full duration-150 hover:bg-orange-500 active:bg-orange-700">
            Watch Video Tutorial
          </button>

          <button
            type="button"
            className="px-4 py-2 text-orange-600 bg-orange-50 rounded-full duration-150 hover:bg-orange-100 active:bg-orange-200">
            Try Free Demo
          </button>
        </div>
      </div>

      {/* <div className=" mt-20 w-full lg:w-9/12 mx-auto">
        <video
          autoPlay
          muted
          playsInline
          loop>
          <source src="https://framerusercontent.com/assets/tYa2OLCojK0ocbl96Mtx0YTg2k.mp4" />
          Your browser does not support the video tag...
        </video>
      </div> */}
    </section>
  );
}

function IconArrowRightShort(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}>
      <path
        fillRule="evenodd"
        d="M4 8a.5.5 0 01.5-.5h5.793L8.146 5.354a.5.5 0 11.708-.708l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L10.293 8.5H4.5A.5.5 0 014 8z"
      />
    </svg>
  );
}
