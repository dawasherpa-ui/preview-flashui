import React from "react";
import { Icon } from "@iconify/react";

const ContactUs = () => {
  return (
    <div className="md:w-[90%] w-[80%]  mx-auto ">
      <div className="flex flex-col  justify-center items-center gap-4 ">
        <p className="text-[#47B9A1]">Contact Us</p>
        <p className="text-center text-xl md:text-3xl text-[#234664]  xl:px-[20vw]">
          Contact us for a personalized experience.
        </p>
      </div>
      <div
        id="contact"
        style={{
          backgroundColor: "white",
        }}
        className="  lg:flex    gap-8 py-16  "
      >
        <div className="flex flex-col flex-1 text-sm text-gray-400  py-8 md:px-16 px-4 gap-8 rounded-3xl bg-white border border-gray-400 ">
          <h1 className="text-xl text-black font-semibold">Personal Detail</h1>
          <div className="md:flex justify-between gap-8 ">
            <div className="flex w-full gap-2 flex-col">
              <label htmlFor="name">First Name</label>
              <input
                className="py-3 px-4  border min-w-[200px] border-gray-300 focus:outline-[#51BA80]   rounded-full"
                type="text"
                placeholder="Your first name*"
              />
            </div>
            <div className="flex gap-2 pt-4 md:pt-0 w-full flex-col">
              <label htmlFor="name">Last Name</label>
              <input
                className="py-3 px-4 border min-w-[200px] border-gray-300 focus:outline-[#51BA80]   rounded-full"
                type="text"
                placeholder="Your last name*"
              />
            </div>
          </div>
          <div className="md:flex  justify-between gap-8">
            <div className="flex gap-2 w-full flex-col">
              <label htmlFor="name">Phone</label>
              <input
                className="py-3 px-4  border min-w-[200px] border-gray-300 focus:outline-[#51BA80]   rounded-full"
                type="tel"
                placeholder="Phone*"
              />
            </div>
            <div className="flex gap-2 pt-4 md:pt-0  w-full flex-col">
              <label htmlFor="name">Email</label>
              <input
                className="py-3 px-4 border min-w-[200px] border-gray-300 focus:outline-[#51BA80]   rounded-full"
                type="email"
                placeholder="Your email*"
              />
            </div>
          </div>
          {/* repo change  */}
          <div className="lg:flex justify-between gap-8">
            <div className="flex w-full gap-2 flex-1 flex-col">
              <label htmlFor="name">Address</label>
              <input
                className="py-3 px-4 min-w-[200px] border border-gray-300 focus:outline-[#51BA80]   rounded-full"
                type="address"
                placeholder="Address*"
              />
            </div>
            <div className="flex overflow-hidden gap-2 pt-4 md:pt-0  flex-1 flex-col">
              <label htmlFor="services">Services</label>
              <select
                style={{
                  appearance: "none",
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z'/%3E%3Cpath fill='%239CA3AF' d='M12.707 15.707a1 1 0 0 1-1.414 0L5.636 10.05A1 1 0 1 1 7.05 8.636l4.95 4.95l4.95-4.95a1 1 0 0 1 1.414 1.414z'/%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.5rem center",
                  paddingRight: "2.5rem",
                }}
                className="py-3 px-4 min-w-[200px] border border-gray-300 focus:outline-[#51BA80]   rounded-full"
                name="services"
                id="services"
              >
                {servicesData.map((service: any) => (
                  <option value={service} key={service.id}>
                    <>{service.text}</>
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <a
              href="/"
              className="py-4 px-8 bg-[#51BA80] cursor-pointer text-white rounded-full"
            >
              send a message
            </a>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837633/hero-slider-img-3_klmsdx.webp')`,
          }}
          className="flex mt-8 lg:mt-0 flex-col bg-blend-multiply bg-gray-700 bg-opacity-60 justify-between gap-12 py-2 flex-[0.5] bg-cover  box-border text-left text-white rounded-3xl w-full  "
        >
          <div className="flex flex-col gap-4 py-4">
            <h1 className="text-xl px-4">Company Details</h1>
            <p className="text-left text-gray-300 text-xs md:text-sm px-4">
              Consulting provides comprehensive business solutions
              globally. With a team of experienced professionals, they offer
              tailored services in business strategy, financial consulting,
              market research, and IT solutions. Their innovative approach
              ensures operational efficiency and digital transformation for
              businesses of all sizes. Known for excellence and customer
              satisfaction, Infinity Consulting is a trusted partner in driving
              business success.
            </p>
          </div>
          {/* socials  */}
          <div className="flex justify-center ">
            <a
              target="_blank"
              href="https://twitter.com/"
              className="  h-[40px] w-[40px] rounded-full  p-1"
            >
              <Icon
                className=" h-full w-full "
                icon="fa6-brands:square-x-twitter"
              />
              {/* <Icon icon="fa6-brands:square-x-twitter" /> */}
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/"
              className="  h-[40px] w-[40px] rounded-full  p-1"
            >
              <Icon className=" h-full w-full " icon="mage:facebook-square" />
            </a>
            <a
              href="https://www.whatsapp.com/"
              target="_blank"
              className="  h-[40px] w-[40px] rounded-full  p-1"
            >
              <Icon className=" h-full w-full " icon="uim:whatsapp" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="  h-[40px] w-[40px] rounded-full  p-1"
            >
              <Icon
                className=" h-full w-full "
                icon="icon-park-outline:instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

const servicesData = [
  {
    id: 1,
    text: "Business Strategy",
    content:
      "Helping you define and achieve your business objectives with strategic planning and expert advice.",
  },
  {
    id: 2,
    text: "Financial Consulting",
    content:
      "Providing financial analysis, planning, and advice to ensure your business's fiscal health and growth.",
  },
  {
    id: 3,
    text: "Market Research",
    content:
      "Delivering comprehensive market insights to inform your business decisions and strategy.",
  },
  {
    id: 4,
    text: "Human Resources Consulting",
    content:
      "Optimizing your HR practices, from recruitment and retention to employee development and compliance.",
  },
  {
    id: 5,
    text: "IT Consulting",
    content:
      "Offering expert IT solutions to streamline your operations and enhance your business capabilities.",
  },
  {
    id: 6,
    text: "Operational Efficiency",
    content:
      "Identifying and implementing improvements to enhance your business's operational performance.",
  },
  {
    id: 7,
    text: "Risk Management",
    content:
      "Developing strategies to mitigate risks and ensure your business's long-term success.",
  },
  {
    id: 8,
    text: "Digital Transformation",
    content:
      "Guiding your business through digital transformation to stay competitive in a technology-driven world.",
  },
  {
    id: 9,
    text: "Sales and Marketing",
    content:
      "Creating and executing effective sales and marketing strategies to boost your business growth.",
  },
  {
    id: 10,
    text: "Leadership Training",
    content:
      "Developing leadership skills within your organization to drive performance and growth.",
  },
];
