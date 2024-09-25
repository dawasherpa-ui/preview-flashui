import React from "react";
import { Linkedin, Twitter, Github } from "lucide-react";

export default () => {
  const team = [
    {
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      name: "Alex Johnson",
      title: "Senior UX Designer",
      desc: "FlashUi helps to build projects faster.",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      name: "Samantha Lee",
      title: "Full Stack Developer",
      desc: "FlashUi helps to build projects faster.",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      avatar: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a",
      name: "Raj Patel",
      title: "AI Research Scientist",
      desc: "FlashUi helps to build projects faster.",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      avatar: "https://images.unsplash.com/photo-1569913486515-b74bf7751574",
      name: "Emma Wright",
      title: "Product Manager",
      desc: "FlashUi helps to build projects faster.",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      avatar: "https://images.unsplash.com/photo-1645830166230-187caf791b90",
      name: "Carlos Sanchez",
      title: "DevOps Engineer",
      desc: "FlashUi helps to build projects faster.",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
    {
      avatar: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa",
      name: "Lily Chen",
      title: "Data Analyst",
      desc: "FlashUi helps to build projects faster.",
      github: "#",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400">
              Meet Our Visionary Team
            </span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Innovators, creators, and problem-solvers dedicated to shaping the
            future of technology.
          </p>
        </div>
        <div className="mt-20">
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, idx) => (
              <li
                key={idx}
                className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative h-56">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="absolute h-full w-full object-cover transition duration-300 transform hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-medium mt-1">
                    {member.title}
                  </p>
                  <p className="mt-4 text-gray-300 text-sm">{member.desc}</p>
                  <div className="mt-6 flex space-x-4">
                    <a
                      href={member.github}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href={member.twitter}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
