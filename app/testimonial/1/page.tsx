'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const affiliation = [
    {
      image: "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837633/hero-slider-img-3_klmsdx.webp", // Placeholder image URL
      name: "Alice Johnson",
      rating: "5",
      message: "Fantastic experience! The service was impeccable and exceeded my expectations."
    },
    {
      image: "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837633/hero-slider-img-3_klmsdx.webp", // Placeholder image URL
      name: "Bob Smith",
      rating: "4",
      message: "Great service overall, but there’s a little room for improvement."
    },
    {
      image: "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837633/hero-slider-img-3_klmsdx.webp", // Placeholder image URL
      name: "Charlie Davis",
      rating: "3",
      message: "The service was good, but I had a few issues that need to be addressed."
    },
    {
      image: "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837633/hero-slider-img-3_klmsdx.webp", // Placeholder image URL
      name: "Diana Lee",
      rating: "5",
      message: "Excellent service! I’m very satisfied with the results and will definitely come back."
    }
  ];
  
const Testimonials = () => {
  return (
    <div
      id="review"
      className=" w-[80%] md:w-[90%] mx-auto flex flex-col justify-around text-center py-20"
    >
      <p className="text-[#2c54cc] font-semibold text-center sm:text-start">
        TESTIMONIAL
      </p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center sm:text-start">
        Our Client
      </h1>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold pb-10 text-center sm:text-start">
        Thoughts
      </h1>
      <div className=" reviews    gap-12 ">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            924: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1256: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1576: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          modules={[FreeMode, Autoplay, Pagination]}
          className="mySwiper h-[350px]"
        >
          {affiliation?.map((item: any, index: number) => (
            <div key={index}>
              <SwiperSlide className=" justify-center flex items-center">
                <div
                  className={`relative rounded-lg  ${
                    " swiper-slide active "
                  }`}
                >
                  <div className="p-6 overflow-auto bg-[#41548E] text-white min-h-[300px] max-h-[350px] rounded-md">
                    <div className="flex justify-center">
                      <Image
                        src={item?.image}
                        width={1000}
                        height={1000}
                        alt="profileimage"
                        className="h-16 w-16 object-cover rounded-full"
                      />
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="flex  items-center ">
                        <Image src={'https://res.cloudinary.com/dpb8r7bqq/image/upload/v1722075405/commaImage_hrkmfq.png'}
                        width={1000}
                        height={1000} alt="comma" />
                      </div>
                      <div className="flex justify-center items-center flex-col">
                        <p
                          className={` font-semibold mt-2 flex justify-center items-center whitespace-nowrap ${
                             "text-white"
                          }`}
                        >
                          {item.name}
                        </p>
                        <div className="flex justify-center items-center py-2">
                          {Number(item?.rating) < 6 &&
                            Array.from(
                              {
                                length: Number(
                                  item?.rating
                                ),
                              },
                              (_, index) => (
                                <div key={index}>
                                  <svg
                                    width="20px"
                                    height="20px"
                                    viewBox="0 0 24.00 24.00"
                                    fill="yellow"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="yellow"
                                  >
                                    <g
                                      id="SVGRepo_bgCarrier"
                                      stroke-width="0"
                                    ></g>
                                    <g
                                      id="SVGRepo_tracerCarrier"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    ></g>
                                    <g id="SVGRepo_iconCarrier">
                                      {" "}
                                      <path
                                        d="M11.245 4.174C11.4765 3.50808 11.5922 3.17513 11.7634 3.08285C11.9115 3.00298 12.0898 3.00298 12.238 3.08285C12.4091 3.17513 12.5248 3.50808 12.7563 4.174L14.2866 8.57639C14.3525 8.76592 14.3854 8.86068 14.4448 8.93125C14.4972 8.99359 14.5641 9.04218 14.6396 9.07278C14.725 9.10743 14.8253 9.10947 15.0259 9.11356L19.6857 9.20852C20.3906 9.22288 20.743 9.23007 20.8837 9.36432C21.0054 9.48051 21.0605 9.65014 21.0303 9.81569C20.9955 10.007 20.7146 10.2199 20.1528 10.6459L16.4387 13.4616C16.2788 13.5829 16.1989 13.6435 16.1501 13.7217C16.107 13.7909 16.0815 13.8695 16.0757 13.9507C16.0692 14.0427 16.0982 14.1387 16.1563 14.3308L17.506 18.7919C17.7101 19.4667 17.8122 19.8041 17.728 19.9793C17.6551 20.131 17.5108 20.2358 17.344 20.2583C17.1513 20.2842 16.862 20.0829 16.2833 19.6802L12.4576 17.0181C12.2929 16.9035 12.2106 16.8462 12.1211 16.8239C12.042 16.8043 11.9593 16.8043 11.8803 16.8239C11.7908 16.8462 11.7084 16.9035 11.5437 17.0181L7.71805 19.6802C7.13937 20.0829 6.85003 20.2842 6.65733 20.2583C6.49056 20.2358 6.34626 20.131 6.27337 19.9793C6.18915 19.8041 6.29123 19.4667 6.49538 18.7919L7.84503 14.3308C7.90313 14.1387 7.93218 14.0427 7.92564 13.9507C7.91986 13.8695 7.89432 13.7909 7.85123 13.7217C7.80246 13.6435 7.72251 13.5829 7.56262 13.4616L3.84858 10.6459C3.28678 10.2199 3.00588 10.007 2.97101 9.81569C2.94082 9.65014 2.99594 9.48051 3.11767 9.36432C3.25831 9.23007 3.61074 9.22289 4.31559 9.20852L8.9754 9.11356C9.176 9.10947 9.27631 9.10743 9.36177 9.07278C9.43726 9.04218 9.50414 8.99359 9.55657 8.93125C9.61593 8.86068 9.64887 8.76592 9.71475 8.57639L11.245 4.174Z"
                                        // stroke="yellow"
                                        // stroke-width="1.464"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                      ></path>{" "}
                                    </g>
                                  </svg>
                                </div>
                              )
                            )}
                        </div>
                      </div>
                      <div></div>
                    </div>
                    <p className="text-sm">{item.message}</p>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;