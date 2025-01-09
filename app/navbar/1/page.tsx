"use client";
import React, { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Icon } from "@iconify/react/dist/iconify.js";

const navItems = [
  {
    title: "Home",
    href: "",
  },
  {
    title: "About",
    href: "",
  },
  {
    title: "Booking",
    href: "",
  },
  {
    title: "Blog",
    href: "",
  },
];

function Page() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const listVariants = {
    closed: {
      x: "100vh",
    },
    opened: {
      x: 0,
      transition: {
        type: "tween",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const listItemVatiants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <div
        className={`flex justify-between items-center bg-black text-white px-4 sm:px-6 md:px-10 lg:px-16 xl:px-28 h-[70px]`}
      >
        <Link
          href="#"
          className="flex items-center  justify-center cursor-pointer h-9 w-28"
        >
          <span className="text-2xl">Logo</span>
        </Link>
        <div className="hidden md:flex items-center gap-14 ">
          <div className="flex gap-12 md:gap-14">
            {navItems.map((item, index) => (
              <Link
                href={item?.href}
                key={index}
                className={`text-sm lg:text-lg ${
                  pathname === item?.href ? "text-blue-500" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <button
              className="bg-gradient-to-l from-[#202752] to-[#1a40fa] hover:bg-[#1d20e4] py-2 px-6 rounded-3xl flex items-center text-white"
              onClick={toggleDrawer}
            >
              Contact
            </button>
          </div>
        </div>
        <div className=" md:hidden">
          <button
            className="w-10 h-8 flex flex-col justify-between z-50 relative "
            onClick={() => setOpen((prev: any) => !prev)}
          >
            {!open ? (
              <Icon icon="charm:menu-hamburger" className="text-2xl" />
            ) : (
              <Icon
                icon="basil:cross-outline"
                className="text-white h-full w-full"
              />
            )}
          </button>
          {open && (
            <motion.div
              variants={listVariants}
              initial="closed"
              animate="opened"
              className="fixed inset-0 w-screen h-screen bg-black flex flex-col items-center justify-center gap-8 text-2xl z-40"
            >
              {navItems.map((item, index) => (
                <motion.div variants={listItemVatiants} key={index}>
                  <Link
                    href={item.href}
                    className="text-white whitespace-nowrap"
                    onClick={() => setOpen((prev: any) => !prev)}
                  >
                    {item?.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={listItemVatiants}>
                <div>
                  <button
                    className="text-xl whitespace-nowrap bg-gradient-to-l from-[#091C82] to-[#182046] hover:bg-[#393baf] text-white font-semibold px-6 py-2 rounded-full text-thin"
                    onClick={toggleDrawer}
                  >
                    Contact Us
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="top"
        className="bla bla bla rounded-xl m-auto min-h-screen md:max-w-[80vw] overflow-auto appointMent p-8 w-screen"
        overlayColor="transparent"
      ><span className="float-right inline justify-end cursor-pointer" onClick={toggleDrawer}>
      <Icon
        icon="basil:cross-outline"
        className="text-black text-4xl"
      />
    </span>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col flex-1 text-sm text-gray-400  py-8 md:px-16 px-8 gap-8 rounded-xl bg-white border-gray-200 "
        >
          
          <h1 className="text-xl text-black font-semibold">Reach Out to Us</h1>
          <div className="md:flex justify-between gap-8 ">
            <div className="flex w-full gap-2 flex-col">
              <label htmlFor="name">First Name</label>
              <input
                className="py-3 px-4  border min-w-[200px] border-gray-300 focus:outline-[#654AA1]   rounded-xl"
                type="text"
                placeholder="Your first name*"
                required
              />
            </div>
            <div className="flex gap-2 pt-4 md:pt-0 w-full flex-col">
              <label htmlFor="name">Last Name</label>
              <input
                className="py-3 px-4 border min-w-[200px] border-gray-300 focus:outline-[#654AA1]   rounded-xl"
                type="text"
                placeholder="Your last name*"
                required
              />
            </div>
          </div>
          <div className="md:flex  justify-between gap-8">
            <div className="flex gap-2 w-full flex-col">
              <label htmlFor="name">Phone</label>
              <input
                className="py-3 px-4  border min-w-[200px] border-gray-300 focus:outline-[#654AA1]   rounded-xl"
                type="tel"
                placeholder="Phone*"
              />
            </div>
            <div className="flex gap-2 pt-4 md:pt-0  w-full flex-col">
              <label htmlFor="name">Email</label>
              <input
                className="py-3 px-4 border min-w-[200px] border-gray-300 focus:outline-[#654AA1]   rounded-xl"
                type="email"
                placeholder="Your email*"
                required
              />
            </div>
          </div>

          <div className="lg:flex justify-between gap-8">
            <div className="flex w-full gap-2 flex-1 flex-col">
              <label htmlFor="name">Address</label>
              <input
                className="py-3 px-4 min-w-[200px] border border-gray-300 focus:outline-[#654AA1]   rounded-xl"
                type="address"
                placeholder="Address*"
              />
            </div>
            <div className="flex overflow-hidden gap-2 pt-4 md:pt-0  flex-1 flex-col">
              <label htmlFor="services">Services</label>
              <select
                style={{
                  appearance: "none",

                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 0.5rem center",
                  paddingRight: "2.5rem",
                }}
                className="py-3 px-4 min-w-[200px] border border-gray-300 focus:outline-[#654AA1]   rounded-xl"
                name="services"
                id="services"
              >
                <option>Select a service</option>
                <option value="hello">Hello</option>
                <option value="hello">Hello</option>
                <option value="hello">Hello</option>
                <option value="hello">Hello</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="py-2 px-8  hover:px-10 transition-all duration-200 text-base bg-black  cursor-pointer text-white rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </Drawer>
    </>
  );
}
export default Page;
