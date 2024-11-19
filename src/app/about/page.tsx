"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12"
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-64 h-64 relative">
              <Image
                src="/me.jpg"
                alt="Sadia Batool"
                fill
                className="object-cover rounded-full border-4 border-pink-200 shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                About <span className="text-pink-500">Me</span>
              </h1>
              <p className="text-gray-600 leading-relaxed mb-6">
                Hello! I'm Sadia Batool, a passionate graphic designer and web developer who believes in creating beautiful and functional digital experiences. When I'm not crafting designs or writing code, you'll find me immersed in the vibrant world of K-pop music or lost in the pages of a good book.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My approach combines creative design aesthetics with technical expertise, allowing me to bring unique visions to life through both visual design and web development.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Interests Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">K-pop Enthusiast</h3>
            <p className="text-gray-600">
              My love for K-pop goes beyond just the music - it's about the creativity, production quality, and artistic expression that inspires my own creative work.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Book Lover</h3>
            <p className="text-gray-600">
              Reading helps me expand my imagination and brings fresh perspectives to my design work. Each book is a new adventure that fuels my creativity.
            </p>
          </div>
        </motion.section>

        {/* Skills & Tools */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 md:p-12 rounded-3xl"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Skills & Tools</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl text-center">
              <p className="font-medium text-gray-800">Adobe Creative Suite</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl text-center">
              <p className="font-medium text-gray-800">React & Next.js</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl text-center">
              <p className="font-medium text-gray-800">UI/UX Design</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl text-center">
              <p className="font-medium text-gray-800">Responsive Design</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl text-center">
              <p className="font-medium text-gray-800">Figma</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl text-center">
              <p className="font-medium text-gray-800">HTML/CSS</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl text-center">
              <p className="font-medium text-gray-800">JavaScript</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl text-center">
              <p className="font-medium text-gray-800">Tailwind CSS</p>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
