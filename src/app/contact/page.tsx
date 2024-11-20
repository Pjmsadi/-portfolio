"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20">
        
        {/* Contact Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let&apos;s <span className="text-pink-500">Connect</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I&apos;m always excited to collaborate on new projects or just have a friendly chat. 
            Feel free to reach out through any of the channels below!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-colors"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">eshaalZahrah5@gmail.com</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Social Media</h3>
              <div className="space-y-3">
                <a href="https://www.linkedin.com/in/sadia-batool-39ba982b5" target="blank" className="block text-gray-600 hover:text-pink-500 transition-colors">
                  LinkedIn
                </a>
                <a href="https://x.com/BaharEGull7/photo" target="blank" className="block text-gray-600 hover:text-pink-500 transition-colors">
                  Twitter
                </a>
                <a href="https://www.instagram.com/pjm.sadi/?hl=en" target="blank" className="block text-gray-600 hover:text-pink-500 transition-colors">
                  Instagram
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Working Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Weekend: By appointment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
