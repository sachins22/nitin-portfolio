import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Instagram } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen minecraft-bg text-white">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden ring-4 ring-emerald-500/30"
          >
            <img 
              src="/WhatsApp Image 2025-05-30 at 09.24.37_36cc7baa.jpg" 
              alt="Nitin Sharma"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <div className="text-center md:text-left glass-card p-6 rounded-2xl">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-emerald-300"
            >
              Nitin Sharma
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl text-emerald-100 mb-6"
            >
              Accountant & Student
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start"
            >
              <a href="mailto:nitinkaushikpalyan@gmail.com" className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-600 px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base">
                <Mail size={18} />
                Contact Me
              </a>
              <a href="https://www.linkedin.com/in/nitin-sharma-0597b131a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-emerald-800 hover:bg-emerald-700 px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base">
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a href="https://www.instagram.com/nitin._pandt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-emerald-900 hover:bg-emerald-800 px-3 sm:px-4 py-2 rounded-lg transition-colors text-sm sm:text-base">
                <Instagram size={18} />
                Instagram
              </a>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* About Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 sm:py-16 lg:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-emerald-300">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-4 sm:space-y-6 glass-card p-6 rounded-2xl">
              <div className="flex items-center gap-3">
                <Phone className="text-emerald-400 flex-shrink-0" />
                <p className="text-sm sm:text-base">+91 9671845096</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-emerald-400 flex-shrink-0" />
                <p className="text-sm sm:text-base break-all">nitinkaushikpalyan@gmail.com</p>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-emerald-400 flex-shrink-0" />
                <p className="text-sm sm:text-base">Bhalaur, Bapoli, Panipat – 132103</p>
              </div>
            </div>
            <div className="space-y-4 glass-card p-6 rounded-2xl">
              <h3 className="text-lg sm:text-xl font-semibold text-emerald-400">Education</h3>
              <p className="text-sm sm:text-base">• 12th Pass (Arts with Maths) – 2023</p>
              <p className="text-sm sm:text-base">• Pursuing B.A. (Hons) from I.B. PG College, Panipat (KUK University)</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 sm:py-16 lg:py-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-emerald-300">Professional Skills</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              "Fast Learner",
              "Basic + Advanced Computer Knowledge",
              "Microsoft Office Suite",
              "AI Fundamentals",
              "Tally Prime",
              "Busy Software"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-4 sm:p-6 rounded-2xl text-center hover:bg-emerald-900/30 transition-all transform hover:-translate-y-1 hover:scale-105"
              >
                <p className="text-base sm:text-lg text-emerald-100">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="glass-card py-6 sm:py-8 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-200 text-sm sm:text-base">© 2024 Nitin Sharma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;