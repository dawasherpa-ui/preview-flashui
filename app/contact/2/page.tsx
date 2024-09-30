import React from "react";

function Page() {
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
      <div className="lg:flex lg:items-center lg:-mx-10">
        <div className="lg:w-1/2 lg:mx-10">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
            Get in Touch
          </h1>
  
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            We’re excited to hear from you! Send us a message and we’ll get back to you shortly.
          </p>
  
          <form className="mt-12">
            <div className="-mx-2 md:items-center md:flex">
              <div className="flex-1 px-2">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
  
              <div className="flex-1 px-2 mt-4 md:mt-0">
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
            </div>
  
            <div className="w-full mt-4">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Your Message
              </label>
              <textarea
                className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Write your message here..."
              ></textarea>
            </div>
  
            <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-md hover:bg-green-400 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-50">
              Send Message
            </button>
          </form>
        </div>
  
        <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
          <img
            className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
            src="https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837633/hero-slider-img-3_klmsdx.webp"
            alt="Contact us"
          />
  
          <div className="mt-6 space-y-8 md:mt-8">
            <p className="flex items-start -mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-green-500 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
  
              <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                1234 Elm Street, New York, NY 12345
              </span>
            </p>
  
            <p className="flex items-start -mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-green-500 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
  
              <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                +1 (555) 123-4567
              </span>
            </p>
  
            <p className="flex items-start -mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-2 text-green-500 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
  
              <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                support@example.com
              </span>
            </p>
          </div>
  
          <div className="mt-6 w-80 md:mt-8">
            <h3 className="text-gray-600 dark:text-gray-300 ">Follow us</h3>
  
            <div className="flex mt-4 -mx-1.5">
              <a
                className="mx-1.5 dark:hover:text-green-400 text-gray-400 transition-colors duration-300 transform hover:text-green-500"
                href="javascript:void(0)"
              >
                <svg
                  className="w-10 h-10 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.6668 6.67334C18.0002 7.00001 17.3468 7.13268 16.6668 7.33334C15.9195 6.49001 14.8115 6.44334 13.7468 6.84201C12.6822 7.24068 11.9848 8.21534 12.0002 9.33334V10C9.83683 10.0553 7.91016 9.07001 6.66683 7.33334C6.66683 7.33334 3.87883 12.2887 9.3335 14.6667C8.0855 15.498 6.84083 16.0587 5.3335 16C7.53883 17.202 9.94216 17.6153 12.0228 17.0113C14.4095 16.3333 16.3328 14.1953 16.6668 11.3333C16.786 10.4429 16.8158 9.55153 16.7568 8.66334C17.1242 8.27334 17.8202 7.91334 18.6668 6.67334Z"></path>
                </svg>
              </a>
  
              <a
                className="mx-1.5 dark:hover:text-green-400 text-gray-400 transition-colors duration-300 transform hover:text-green-500"
                href="javascript:void(0)"
              >
                <svg
                  className="w-10 h-10 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 2C6.9 2 6 2.9 6 4V20C6 21.1 6.9 22 8 22H16C17.1 22 18 21.1 18 20V4C18 2.9 17.1 2 16 2H8ZM10.8 16.5C12.5685 16.5 13.9998 15.0687 13.9998 13.3002C13.9998 11.5317 12.5685 10.1004 10.8 10.1004C9.03149 10.1004 7.60019 11.5317 7.60019 13.3002C7.60019 15.0687 9.03149 16.5 10.8 16.5ZM7.59985 7.7002C7.59985 8.2937 8.10614 8.8002 8.69985 8.8002C9.29355 8.8002 9.79985 8.2937 9.79985 7.7002C9.79985 7.1067 9.29355 6.6002 8.69985 6.6002C8.10614 6.6002 7.59985 7.1067 7.59985 7.7002ZM16 20H14.4V18.1002C14.4 17.1123 13.5879 16.3002 12.6 16.3002C11.6121 16.3002 10.8 17.1123 10.8 18.1002V20H8.8V18.1002C8.8 16.1208 10.3206 14.6002 12.3 14.6002C14.2794 14.6002 15.8 16.1208 15.8 18.1002V20H16Z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default Page;
