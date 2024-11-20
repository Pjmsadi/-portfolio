"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Sadia <span className="text-pink-500">Batool</span>
            </h3>
            <p className="text-gray-600">
              Creating beautiful digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-pink-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-pink-500 transition-colors">About</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="https://www.linkedin.com/in/sadia-batool-39ba982b5" 
                target="_blank"
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-pink-100 transition-colors"
              >
                <span className="text-xl">👩‍💼</span>
              </a>
              <a 
                href="https://x.com/BaharEGull7/photo" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-pink-100 transition-colors"
              >
                <span className="text-xl">🐦</span>
              </a>
              <a 
                href="https://www.instagram.com/pjm.sadi/?hl=en" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-pink-100 transition-colors"
              >
                <span className="text-xl">📸</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 pt-8 border-t border-pink-200"
        >
          <p className="text-gray-600">
            © {new Date().getFullYear()} Sadia Batool. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Made with 💖 and creativity
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
