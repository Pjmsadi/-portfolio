"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12 mb-20"
        >
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Hi, I'm <span className="text-pink-500">Sadia</span>
              <br />
              Creative Designer
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              I craft beautiful digital experiences through graphic design and web development. Let's bring your vision to life with style and innovation.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Let's Connect
            </Link>
          </div>
          <div className="w-72 h-72 relative">
            <Image
              src="/me.jpg"
              alt="Sadia Batool"
              fill
              className="object-cover rounded-full border-4 border-pink-200 shadow-xl"
            />
          </div>
        </motion.div>

        {/* Featured Work */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Featured <span className="text-pink-500">Work</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/1.jpg"
                  alt="Project 1"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Brand Identity Design</h3>
              <p className="text-gray-600">Modern branding solutions for forward-thinking businesses</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/2.jpg"
                  alt="Project 2"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Web Development</h3>
              <p className="text-gray-600">Responsive and dynamic websites with modern technologies</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-video relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/3.jpg"
                  alt="Project 3"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">UI/UX Design</h3>
              <p className="text-gray-600">User-centered design solutions for digital products</p>
            </div>
          </div>
        </motion.section>

        {/* Services */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-pink-100 to-purple-100 p-12 rounded-3xl"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            What I <span className="text-pink-500">Offer</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Graphic Design</h3>
              <p className="text-gray-600">Creating visually stunning designs that capture your brand's essence</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Web Development</h3>
              <p className="text-gray-600">Building modern, responsive websites with the latest technologies</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">UI/UX Design</h3>
              <p className="text-gray-600">Crafting intuitive and engaging user experiences</p>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
