"use client";
import React, { useEffect } from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  ChevronLeft,
} from "lucide-react"; // lucide-react icons
import Image from "next/image";
import Link from "next/link";

function Page() {
  // Static data for tags and blogs
  const tags = ["React", "JavaScript", "Web Development"];
  const blogs = [
    {
      id: 3,
      title: "JavaScript ES6 Features You Should Know",
      date: "2024-09-15",
      intro:
        "Discover the most important features introduced in JavaScript ES6...",
      category: "Programming",
    },

    {
      id: 1,
      title: "Understanding React's useState Hook",
      date: "2024-10-17",
      intro:
        "In this article, we explore how to use the useState hook in React and its benefits...",
      category: "Tech",
      image:
        "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1726390892/Black_Minimalist_Website_Mockup_Instagram_Post_j5ca4p.png",
    },
    {
      id: 2,
      title: "JavaScript ES6 Features You Should Know",
      date: "2024-09-15",
      intro:
        "Discover the most important features introduced in JavaScript ES6...",
      category: "Programming",
      image:
        "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1726390892/Black_Minimalist_Website_Mockup_Instagram_Post_j5ca4p.png",
    },
    {
      id: 4,
      title: "JavaScript ES6 Features You Should Know",
      date: "2024-09-15",
      intro:
        "Discover the most important features introduced in JavaScript ES6...",
      category: "Programming",
    },
    {
      id: 4,
      title: "JavaScript ES6 Features You Should Know",
      date: "2024-09-15",
      intro:
        "Discover the most important features introduced in JavaScript ES6...",
      category: "Programming",
    },
    {
      id: 2,
      title: "JavaScript ES6 Features You Should Know",
      date: "2024-09-15",
      intro:
        "Discover the most important features introduced in JavaScript ES6...",
      category: "Programming",
      image:
        "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1726390892/Black_Minimalist_Website_Mockup_Instagram_Post_j5ca4p.png",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  const handleTop = () => {
    window.scrollTo(0, 0); // Scroll to top on click
  };

  return (
    <div className="w-full bg-zinc-50 text-zinc-900">
      <div className="w-11/12 md:w-7/12 py-[5rem] overflow-hidden mx-auto relative">
        {/* Back Button */}
        <Link href="javascript:void(0)" className="w-full flex justify-start">
          <div className="text-zinc-700 z-40 hover:scale-105 duration-300 hover:text-zinc-800 flex  justify-center items-center">
            <div className="overflow-hidden title flex justify-center items-center">
              <ChevronLeft className="w-[1.5rem] h-[1.5rem]" />
            </div>
            <div className="font-medium">Back</div>
          </div>
        </Link>

        {/* Blog Title and Meta Info */}
        <div className="flex flex-col gap-4 title">
          <h1 className="w-full md:w-[70%] mx-auto pt-5 text-4xl text-start md:text-center font-semibold text-zinc-950">
            Understanding React's useState Hook
          </h1>
          <div className="text-[12px] w-full text-center font-semibold">
            <span className="text-zinc-700">2024-10-17 · </span>
            <span className="uppercase">Tech</span>
          </div>

          {/* Author Info */}
          <div className="flex flex-col w-full gap-1 my-2">
            <div className="w-[2.5rem] h-[2.5rem] rounded-full overflow-hidden">
              <Image
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-center rounded-full"
                src="https://images.unsplash.com/photo-1569913486515-b74bf7751574"
                alt="Author"
              />
            </div>
            <span className="text-[12px] font-semibold">
              <span className="text-zinc-800">Author:</span> Emma Wright
            </span>
          </div>
        </div>

        {/* Blog Content */}
        <div className="flex w-full text-lg text-zinc-950 flex-col gap-6 justify-center items-center">
          <div>
            <h3 className="text-2xl font-bold my-5">
              #1. What is Lorem Ipsum?
            </h3>

            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-button">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </blockquote>

            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>

        {/* Blog Image */}
        <div className="w-full h-[30vh] md:h-[50vh] mx-auto mt-[1rem] overflow-hidden rounded-xl bg-primary-200">
          <Image
            width={1000}
            height={1000}
            src="https://res.cloudinary.com/dpb8r7bqq/image/upload/v1726390892/Black_Minimalist_Website_Mockup_Instagram_Post_j5ca4p.png"
            alt="React useState Hook"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Blog Description */}
        <div className="flex w-full text-start mx-auto mt-[1rem] text-md text-zinc-950 font-normal flex-col gap-6 justify-center items-center">
          <div>
            <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-button">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </blockquote>
          </div>
        </div>

        {/* Tags */}
        <div className="w-full flex py-10 gap-3 items-start">
          <span className="font-medium">Tags:</span>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, i) => (
              <div
                key={i}
                className="px-3 py-1 rounded-full bg-zinc-300 text-zinc-900"
              >
                #{tag}
              </div>
            ))}
          </div>
        </div>

        {/* Social Share */}
        <div className="w-full flex gap-3">
          <span className="font-medium">Share:</span>
          <div className="flex gap-2">
            <a
              href="javascript:void(0)"
              className="hover:scale-110 duration-200"
            >
              <Facebook size={24} />
            </a>
            <a
              href="javascript:void(0)"
              className="hover:scale-110 duration-200"
            >
              <Twitter size={24} />
            </a>
            <a
              href="javascript:void(0)"
              className="hover:scale-110 duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="javascript:void(0)"
              className="hover:scale-110 duration-200"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>

        {/* Related Articles */}
        <div className="w-full p-1 mx-auto mt-[5rem]">
          <div className="w-full flex justify-between items-center">
            <span className="font-semibold text-zinc-950 text-lg md:text-2xl">
              Related Articles
            </span>
          </div>

          <div className="w-full columns-1 md:columns-3 mt-4">
            {blogs.map((item, index) => (
              <Link
                key={index}
                href={"javascript:void(0)"}
                onClick={handleTop}
                className="w-full  hover:bg-gradient-to-r duration-300 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] from-[#3cec62] via-[#e70435] to-[#e70fdc]  text-sm md:text-lg   flex-col relative text-zinc-950  cursor-pointer overflow-hidden hover:border-secondary-300 border-primary-100 rounded-xl p-[1px]   flex gap-3 mb-4"
              >
                <div className="bg-zinc-50 flex flex-col z-20 gap-3 p-3 rounded-xl w-full h-full">
                  {/* image */}
                  {item.image && (
                    <div className="w-full h-[15rem]  bg-primary-200 overflow-hidden rounded-xl">
                      <Image
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover group-hover:scale-105 duration-300 object-center"
                        src={item?.image}
                        alt={item.title}
                      />
                    </div>
                  )}
                  <div className="w-full relative z-20  flex flex-col gap-3 items-start">
                    {/* <div className="text-zinc-950 font-medium text-[14px] duration-300 group-hover:bg-gradient-to-r group-hover:from-[#3F6DB4] group-hover:via-[#CE157E] group-hover:to-[#F57F20] group-hover:bg-clip-text group-hover:text-transparent">
                {item?.Contents[0]?.Date}
              </div> */}
                    <div className="text-zinc-950 title font-medium">
                      {item?.title}
                    </div>
                    <div className="text-zinc-700 text-sm para  text-[15px]">
                      {item?.intro}
                    </div>
                    <div className="w-full flex font-medium title  text-[13px] justify-between items-center">
                      {/* DATE  */}
                      <div className="text-zinc-600  ">{item?.date}</div>

                      {/* CATEGORY  */}
                      <span className="text-zinc-700">#tech</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
