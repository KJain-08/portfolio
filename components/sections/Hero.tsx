'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, Download } from 'lucide-react'
import { useEffect, useState } from 'react'
import { PhoneForSection } from '../PhoneParallax'

export default function Hero() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [counts, setCounts] = useState({ apps: 0, projects: 0, experience: 0 })
  
  useEffect(() => {
    if (!inView) return
    
    const interval = setInterval(() => {
      setCounts(prev => ({
        apps: prev.apps < 4 ? prev.apps + 1 : 4,
        projects: prev.projects < 6 ? prev.projects + 1 : 6,
        experience: prev.experience < 2 ? prev.experience + 1 : 2
      }))
    }, 40)
    
    return () => clearInterval(interval)
  }, [inView])
  
  return (
    <section id="hero" className="min-h-screen w-full flex items-start justify-center px-4 py-6 md:py-10 relative overflow-hidden">
      <PhoneForSection sectionId="hero" />
      
      {/* Moon-like gradient backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-blue-500/12 via-blue-500/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[650px] h-[650px] bg-gradient-radial from-purple-500/12 via-purple-500/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-pink-500/8 via-pink-500/4 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Animated floating objects - Mobile only */}
      <div className="md:hidden absolute inset-0 pointer-events-none z-10">
        {/* Large floating blob 1 - Blue/Purple */}
        <motion.div
          animate={{ 
            x: [0, 60, -40, 0],
            y: [0, -70, 50, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute top-1/4 right-5 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        
        {/* Large floating blob 2 - Purple/Pink */}
        <motion.div
          animate={{ 
            x: [0, -50, 60, 0],
            y: [0, 65, -40, 0],
            scale: [1, 0.85, 1.25, 1],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute bottom-1/3 left-8 w-52 h-52 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        
        {/* Medium floating blob - Cyan */}
        <motion.div
          animate={{ 
            x: [0, 70, -50, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 5
          }}
          className="absolute top-2/3 left-1/4 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-400/20 rounded-full blur-2xl"
        />
        
        {/* Floating rings */}
        <motion.div
          animate={{ 
            y: [0, -90, 0],
            x: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute top-1/3 left-1/4 w-24 h-24 border-2 border-blue-500/30 rounded-full"
        />
        
        <motion.div
          animate={{ 
            y: [0, 75, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 4
          }}
          className="absolute bottom-1/4 right-1/3 w-20 h-20 border-2 border-purple-500/30 rounded-full"
        />
        
        {/* Small animated dots */}
        <motion.div
          animate={{ 
            x: [0, 45, 0],
            y: [0, -60, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-400/60 rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400/60 rounded-full"
        />
        
        {/* Additional floating elements */}
        <motion.div
          animate={{ 
            x: [0, 55, -45, 0],
            y: [0, -55, 45, 0],
            scale: [1, 1.2, 0.85, 1],
          }}
          transition={{ 
            duration: 19, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute top-1/2 right-1/4 w-44 h-44 bg-gradient-to-br from-indigo-500/15 to-violet-500/15 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ 
            x: [0, -60, 50, 0],
            y: [0, 60, -45, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{ 
            duration: 21, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 7
          }}
          className="absolute bottom-1/2 left-1/2 w-46 h-46 bg-gradient-to-br from-fuchsia-500/15 to-pink-500/15 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{ 
            y: [0, -80, 0],
            opacity: [0.25, 0.55, 0.25],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 13, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-2/3 right-1/4 w-18 h-18 border border-cyan-500/25 rounded-full"
        />
        
        <motion.div
          animate={{ 
            y: [0, 65, 0],
            x: [0, -25, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 5
          }}
          className="absolute top-1/4 left-2/3 w-20 h-20 border border-fuchsia-500/25 rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, 40, 0],
            y: [0, -55, 0],
          }}
          transition={{ 
            duration: 7.5, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute bottom-1/4 right-2/3 w-3 h-3 bg-cyan-400/60 rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, -35, 0],
            y: [0, 60, 0],
          }}
          transition={{ 
            duration: 8.5, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 4
          }}
          className="absolute top-2/3 left-1/4 w-2.5 h-2.5 bg-violet-400/60 rounded-full"
        />
      </div>
      
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
            <div className="text-gray-400 text-[10px] md:text-sm font-semibold">Client Projects</div>
          </div>
          <div className="relative rounded-2xl md:rounded-3xl p-3 md:p-6 border  backdrop-blur-sm"
            style={{ 
              background: 'rgba(255, 255, 255, 0.05)',
            }}>
            <div className="text-2xl md:text-4xl font-black text-gradient mb-1">
              {counts.projects}+
            </div>
            <div className="text-gray-400 text-[10px] md:text-sm font-semibold">Projects Built</div>
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
