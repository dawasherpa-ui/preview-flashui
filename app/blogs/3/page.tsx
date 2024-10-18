import React from "react";
import { Facebook, Twitter, Instagram, Share2, ChevronRight } from "lucide-react"; // lucide-react icons
import Image from "next/image";
import Link from "next/link";

function Page() {

  // Static data for blogs and affiliations
  const blogs = [
    {
      id: 1,
      title: "Understanding React's useState Hook",
      date: "2024-10-17",
      intro:
        "In this article, we explore how to use the useState hook in React...",
      image: "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1726390892/Black_Minimalist_Website_Mockup_Instagram_Post_j5ca4p.png",
    },
    {
      id: 2,
      title: "JavaScript ES6 Features You Should Know",
      date: "2024-09-15",
      intro:
        "Discover the most important features introduced in JavaScript ES6...",
      image: "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1726390892/Black_Minimalist_Website_Mockup_Instagram_Post_j5ca4p.png",
    },
  ];

  const affiliation = [
    {
      id: 1,
      title: "Understanding React&apos;s useState Hook",
      author: " Emma Wright",
      date: "2024-10-17",
      description: "<p>This is the detailed description of the blog post.</p>",
      image: "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1726390892/Black_Minimalist_Website_Mockup_Instagram_Post_j5ca4p.png",
      authorImage: "https://images.unsplash.com/photo-1569913486515-b74bf7751574",
    },
  ];

  return (
    <div>
      <div
        className={`px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 bg-gray-100 pb-10`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pt-8 ">
          <div className="lg:col-span-2">
            <div className="w-full">
              <Image
                src={affiliation[0]?.image}
                width={1000}
                height={1000}
                className="w-full object-cover max-h-[calc(100vh-150px)]"
                alt="Blog image"
              />
            </div>
            <div className="flex justify-between py-4">
              <div className="flex items-center justify-center gap-2">
                <Image
                  src={affiliation[0]?.authorImage}
                  width={1000}
                  height={1000}
                  alt={affiliation[0]?.author}
                  className="h-8 w-8 object-cover rounded-full"
                />
                <h1 className="text-para-100 font-medium text-sm">
                  {affiliation[0]?.author}
                </h1>
              </div>
              <div className="text-para-100 font-medium text-sm">
                {affiliation[0]?.date}
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-2">
              {affiliation[0]?.title}
            </h1>
            <div className="text-secondary-600">
              <div>
                <h3 className="text-2xl font-bold my-5">
                  #1. What is Lorem Ipsum?
                </h3>

                <p className="text-base leading-8 my-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>

                <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-button">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s
                </blockquote>

                <p className="text-base leading-8 my-5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1 relative">
            <div className="sticky top-10">
              <h1 className="my-10 text-xl flex justify-start items-center font-medium">
                Related articles
              </h1>
              <div className="flex flex-col gap-4 overflow-y-auto h-[80vh] custom-scrollbar">
                {blogs.map((item, index) => (
                    <div
                      key={index}
                      className="flex p-4 bg-white rounded-xl gap-5 "
                    >
                      {item?.image && (
                        <div>
                          <Image
                            src={item?.image}
                            width={1000}
                            height={1000}
                            alt={item?.title}
                            className="object-cover min-h-24 min-w-24 max-w-24 max-h-24 rounded-xl"
                          />
                        </div>
                      )}
                      <div className="flex flex-col justify-between w-full">
                        <h1 className="text-sm sm:text-xl lg:text-sm font-semibold">
                          {item?.title}
                        </h1>
                        <div className="flex justify-between text-xs sm:text-lg lg:text-xs">
                          <div className="flex items-center ">
                            <Link
                              href={`javascript:void(0)`}
                              className="text-primary-400"
                            >
                              Read More
                            </Link>
                            <ChevronRight
                              className="object-cover h-4 w-4"
                            />
                          </div>
                          <p>{item?.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center justify-start pt-5">
          <Share2 />
          <a
            href={`javascript:void(0)`}
            rel="noopener noreferrer"
          >
            <Facebook className="text-primary-400" size={24} />
          </a>
          <a
            href={`javascript:void(0)`}
            rel="noopener noreferrer"
          >
            <Twitter className="text-primary-400" size={24} />
          </a>
          <a
            href={`javascript:void(0)`}
            rel="noopener noreferrer"
          >
            <Instagram className="text-primary-400" size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;
