'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, Download } from 'lucide-react'
import { useEffect, useState } from 'react'
import { PhoneForSection } from '../PhoneParallax'

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [counts, setCounts] = useState({ apps: 0, users: 0, experience: 0 })
  
  useEffect(() => {
    if (!inView) return
    
    const interval = setInterval(() => {
      setCounts(prev => ({
        apps: prev.apps < 6 ? prev.apps + 1 : 6,
        users: prev.users < 1200 ? prev.users + 50 : 1200,
        experience: prev.experience < 2 ? prev.experience + 1 : 2
      }))
    }, 40)
    
    return () => clearInterval(interval)
  }, [inView])
  
  return (
    <section id="hero" className="min-h-screen w-full flex items-start justify-center px-4 py-6 md:py-10 relative">
      <PhoneForSection sectionId="hero" />
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 md:mb-6"
        >
          <span className="inline-block px-3 py-1.5 md:px-4 my-3 md:my-0  md:py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 text-sm md:text-sm font-semibold backdrop-blur-sm ">
            👋 Available for Opportunities
          </span> 
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl md:text-8xl font-black text-white mb-1 md:mb-6 leading-tight"
        >
          Kunal Jain
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-3xl font-bold mb-6 md:mb-8"
        >
          <span className="text-gradient">Full-Stack Developer</span>
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="md:hidden  text-lg md:text-2xl text-gray-300 mb-14 md:mb-12 max-w-3xl mx-auto leading-relaxed text-center px-2"
        >
          Building scalable mobile & <br /> web applications <br /> with Flutter, React, and Node.js. <br />
          <span className="text-white font-bold text-xl"> 2+ years</span> <br />   of experience creating <br /> production-grade solutions.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-md:hidden text-md md:text-2xl text-gray-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed text-center px-2"
        >
          Building scalable mobile &  web applications with Flutter, React, and Node.js.
          <span className="text-white font-semibold"> 2+ years</span>  of experience creating production-grade solutions.
        </motion.p>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-3 gap-3 md:gap-8 max-w-2xl mx-auto mb-12 md:mb-12"
        >
          <div className="relative rounded-2xl md:rounded-3xl p-3 md:p-6 border  backdrop-blur-sm"
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
            }}>
            <div className="text-2xl md:text-4xl font-black text-gradient mb-1">
              {counts.apps}+
            </div>
            <div className="text-gray-400 text-[10px] md:text-sm font-semibold">Production Apps</div>
          </div>
          <div className="relative rounded-2xl md:rounded-3xl p-3 md:p-6 border  backdrop-blur-sm"
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
            }}>
            <div className="text-2xl md:text-4xl font-black text-gradient mb-1">
              {counts.users}+
            </div>
            <div className="text-gray-400 text-[10px] md:text-sm font-semibold">Users Impacted</div>
          </div>
          <div className="relative rounded-2xl md:rounded-3xl p-3 md:p-6 border  backdrop-blur-sm"
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
            }}>
            <div className="text-2xl md:text-4xl font-black text-gradient mb-1">
              {counts.experience}+
            </div>
            <div className="text-gray-400 text-[10px] md:text-sm font-semibold">Years Experience</div>
          </div>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex gap-3 md:gap-4 justify-center flex-wrap px-2"
        >
          <a
            href="#projects"
            className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-sm md:text-lg rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 md:px-8 md:py-4 border-2 border-gray-600 text-white font-bold text-sm md:text-lg rounded-full hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm"
          >
            Contact Me
          </a>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="max-md:hidden gap-4 justify-center "
          >
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-600 text-white font-bold text-lg rounded-full hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
            >
              <Download className="w-5 h-5" /> Resume
            </a>
          </motion.div>
        </motion.div>
        
        {/* Resume Button - Separate Row on Mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-3 md:hidden"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-600 text-white font-bold text-sm rounded-full hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-sm"
          >
            <Download className="w-4 h-4" /> Resume
          </a>
        </motion.div>
                
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="mt-6 md:mt-16 animate-bounce-slow"
        >
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-gray-500 mx-auto" />
        </motion.div>
      </div>
    </section>
  )
}
