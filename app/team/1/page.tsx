import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

export default () => {
    const team = [
        {
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
            name: "Alex Johnson",
            title: "Senior UX Designer",
            github: "#",
            linkedin: "#",
            twitter: "#",
        },
        {
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            name: "Samantha Lee",
            title: "Full Stack Developer",
            github: "#",
            linkedin: "#",
            twitter: "#",
        },
        {
            avatar: "https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a",
            name: "Raj Patel",
            title: "AI Research Scientist",
            github: "#",
            linkedin: "#",
            twitter: "#",
        },
        {
            avatar: "https://images.unsplash.com/photo-1569913486515-b74bf7751574",
            name: "Emma Wright",
            title: "Product Manager",
            github: "#",
            linkedin: "#",
            twitter: "#",
        },
        {
            avatar: "https://images.unsplash.com/photo-1645830166230-187caf791b90",
            name: "Carlos Sanchez",
            title: "DevOps Engineer",
            github: "#",
            linkedin: "#",
            twitter: "#",
        },
        {
            avatar: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa",
            name: "Lily Chen",
            title: "Data Analyst",
            github: "#",
            linkedin: "#",
            twitter: "#",
        },
    ]

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Our Innovative Team
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Meet the brilliant minds behind our cutting-edge solutions, driving innovation and excellence in every project.
                    </p>
                </div>
                <div className="mt-16">
                    <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {team.map((member, idx) => (
                            <li key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="p-6">
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                                    />
                                    <h3 className="text-xl font-semibold text-gray-900 text-center">{member.name}</h3>
                                    <p className="text-indigo-600 text-center">{member.title}</p>
                                    <div className="mt-4 flex justify-center space-x-4">
                                        <a href={member.github} className="text-gray-400 hover:text-gray-500">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={member.linkedin} className="text-gray-400 hover:text-gray-500">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href={member.twitter} className="text-gray-400 hover:text-gray-500">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}