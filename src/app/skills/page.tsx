
"use client";

import { motion } from "framer-motion";

export default function SkillsPage() {
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
            My <span className="text-pink-500">Skills</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A showcase of my professional capabilities in graphic design and web development,
            combining creativity with technical expertise.
          </p>
        </motion.div>

        {/* Design Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Design Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Visual Design</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Brand Identity Design</li>
                <li>• Logo Design</li>
                <li>• Typography</li>
                <li>• Color Theory</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">💫</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Digital Design</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• UI/UX Design</li>
                <li>• Wireframing</li>
                <li>• Prototyping</li>
                <li>• User Research</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Design Tools</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Adobe Creative Suite</li>
                <li>• Figma</li>
                <li>• Sketch</li>
                <li>• Canva Pro</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Development Skills */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Development Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Frontend</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• HTML5 & CSS3</li>
                <li>• JavaScript/TypeScript</li>
                <li>• React & Next.js</li>
                <li>• Tailwind CSS</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Performance</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Responsive Design</li>
                <li>• Web Optimization</li>
                <li>• Cross-browser Testing</li>
                <li>• Mobile-first Approach</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Tools</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Git & GitHub</li>
                <li>• VS Code</li>
                <li>• npm/yarn</li>
                <li>• Chrome DevTools</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Skill Level Indicators */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-3xl"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Proficiency Levels
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Graphic Design</span>
                <span className="text-pink-500">95%</span>
              </div>
              <div className="h-3 bg-white/50 rounded-full">
                <div className="h-full w-[95%] bg-pink-500 rounded-full"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">Web Development</span>
                <span className="text-pink-500">90%</span>
              </div>
              <div className="h-3 bg-white/50 rounded-full">
                <div className="h-full w-[90%] bg-pink-500 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-700">UI/UX Design</span>
                <span className="text-pink-500">85%</span>
              </div>
              <div className="h-3 bg-white/50 rounded-full">
                <div className="h-full w-[85%] bg-pink-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
