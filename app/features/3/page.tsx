"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectsData = [
  {
    id: 1,
    name: "syntaxUI",
    description: "Ready-to-use UI elements designed for rapid development.",
    link: "https://syntaxui.com",
    image:
      "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837633/hero-slider-img-3_klmsdx.webp",
  },
  {
    id: 2,
    name: "Prettyfolio",
    description: "A curated collection of portfolios for inspiration.",
    link: "https://prettyfolio.com",
    image:
      "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837719/download_rdxjld.webp",
  },
  {
    id: 3,
    name: "Enchant",
    description: "A vibrant theme for Visual Studio Code.",
    link: "https://enchant.ansubkhan.com",
    image:
      "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837648/features-img-1_msjovk.webp",
  },
  {
    id: 4,
    name: "Ansubkhan.com",
    description: "My personal website, blogs and newsletter.",
    link: "https://ansubkhan.com",
    image:
      "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837633/hero-slider-img-3_klmsdx.webp",
  },
  {
    id: 5,
    name: "Quote Vault",
    description: "Social media, but for sharing quotes.",
    link: "https://quote-vault.vercel.app",
    image:
      "https://res.cloudinary.com/dpb8r7bqq/image/upload/v1721837648/features-img-1_msjovk.webp",
  },
];

const ProjectCard = ({ project }: any) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <div className="relative h-40">
          <Image
            src={project.image}
            layout="fill"
            objectFit="cover"
            alt={project.name}
            className="transition-opacity duration-300 ease-in-out group-hover:opacity-75"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {project.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
        </div>
      </a>
    </motion.div>
  );
};

const ProjectsGrid = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
          Featured Projects
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          Explore a selection of my innovative projects, each designed to solve
          unique challenges and push the boundaries of web development.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
