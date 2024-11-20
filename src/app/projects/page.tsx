"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Brand Identity Design",
      description: "Created comprehensive brand identity including logo, color palette, and style guide for a boutique fashion retailer.",
      image: "/1.jpg",
      tags: ["Branding", "Design", "Logo"],
      link: "#"
    },
    {
      title: "E-Commerce Website",
      description: "Developed a fully responsive e-commerce platform with modern UI/UX principles and seamless checkout experience.",
      image: "/2.jpg", 
      tags: ["Web Development", "E-commerce", "UI/UX"],
      link: "#"
    },
    {
      title: "Mobile App Design",
      description: "Designed an intuitive mobile app interface for a lifestyle and wellness application.",
      image: "/4.jpg",
      tags: ["Mobile", "UI/UX", "Design"],
      link: "#"
    },
    {
      title: "Social Media Campaign",
      description: "Created engaging visual content and graphics for a successful social media marketing campaign.",
      image: "/3.jpg",
      tags: ["Social Media", "Marketing", "Design"],
      link: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            My <span className="text-pink-500">Projects</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A collection of my creative work spanning brand design, web development, and digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="aspect-video relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-2 rounded-lg transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 bg-gradient-to-r from-pink-100 to-purple-100 p-12 rounded-3xl"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Let&apos;s Create Something Beautiful Together
          </h2>
          <p className="text-gray-600 mb-8">
            Have a project in mind? I&apos;d love to help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Start a Project
          </a>
        </motion.div>
      </div>
    </main>
  );
}