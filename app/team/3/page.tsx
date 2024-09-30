"use client";
import { motion } from "framer-motion";
 
 
 
 function Page() {
    return (
      <>
        <div className="bg-zinc-950 text-zinc-50 w-full">
        <div className="mx-auto w-11/12 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
        <div className="w-full  mx-auto py-[8rem] text-zinc-50">
          <div className="w-full text-left md:text-center">
            {/* heading  */}
            <div className="w-full flex flex-col gap-2 items-center">
              <h1 className="w-full leading-none role font-[500] text-[50px] md:text-[85px] text-zinc-100">
              Meet Our{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Experts
                </span>
              </h1>
              <p className="text-[1.2rem] para md:text-[1.5rem]  md:w-[50%]  text-zinc-400">
                {`"Our team is composed of skilled professionals dedicated to pushing the boundaries of innovation and excellence. Together, we're building extraordinary digital experiences for the future."`}
              </p>
            </div>
  
            <div className="mt-[5rem] w-full para">
              <div className="grid grid-cols-2 md:grid-cols-3  place-content-center place-items-center">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="w-full p-2 md:p-10 border border-dotted relative border-zinc-800 hover:border-zinc-700 duration-300 cursor-pointer group h-[30vh] md:h-[75vh] flex flex-col gap-3"
                  >
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.3] bg-black  group-hover:opacity-[0] duration-300"></div>
                    <div className="h-[95%] overflow-hidden">
                      <img
                        src={member.image}
                        alt="member-webx"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-nowrap md:text-lg text-sm font-bold">
                        {member.name}
                      </span>
                      <span className="text-[12px] md:text-[14px] text-zinc-300 mb-3 italic">
                        {member.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </motion.div>
        </div>
      </div>
      </>
    );
  }
  
  const teamMembers=[
    {
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      name: "Alex Johnson",
      role: "Senior UX Designer",
      desc: "FlashUi helps to build projects faster.",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      name: "Samantha Lee",
      role: "Full Stack Developer",
      desc: "FlashUi helps to build projects faster.",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a",
      name: "Raj Patel",
      role: "AI Research Scientist",
      desc: "FlashUi helps to build projects faster.",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574",
      name: "Emma Wright",
      role: "Product Manager",
      desc: "FlashUi helps to build projects faster.",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1645830166230-187caf791b90",
      name: "Carlos Sanchez",
      role: "DevOps Engineer",
      desc: "FlashUi helps to build projects faster.",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa",
      name: "Lily Chen",
      role: "Data Analyst",
      desc: "FlashUi helps to build projects faster.",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  ];
  export default Page;