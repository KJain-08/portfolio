'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { PhoneForSection } from '../PhoneParallax'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  
  return (
    <section id="contact" className="min-h-screen w-full py-24 px-6 flex items-center relative overflow-hidden">
      <PhoneForSection sectionId="contact" />
      
      {/* Moon-like gradient backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-[600px] h-[600px] bg-gradient-radial from-green-500/10 via-green-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[650px] h-[650px] bg-gradient-radial from-purple-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-[450px] h-[450px] bg-gradient-radial from-blue-500/8 via-blue-500/3 to-transparent rounded-full blur-2xl" />
      </div>
      
      {/* Animated floating objects - Mobile only */}
      <div className="md:hidden absolute inset-0 pointer-events-none z-10">
        {/* Floating blob 1 - Green/Teal */}
        <motion.div
          animate={{ 
            x: [0, -55, 45, 0],
            y: [0, 60, -40, 0],
            scale: [1, 1.2, 0.85, 1],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute top-28 right-10 w-40 h-40 bg-gradient-to-br from-green-500/20 to-teal-500/20 rounded-full blur-2xl"
        />
        
        {/* Floating blob 2 - Purple/Blue */}
        <motion.div
          animate={{ 
            x: [0, 60, -50, 0],
            y: [0, -55, 45, 0],
            scale: [1, 0.9, 1.25, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute bottom-1/4 left-8 w-44 h-44 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl"
        />
        
        {/* Floating blob 3 - Pink/Orange */}
        <motion.div
          animate={{ 
            x: [0, 70, -60, 0],
            y: [0, -40, 50, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 5
          }}
          className="absolute top-1/2 left-1/4 w-38 h-38 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-2xl"
        />
        
        {/* Floating circles */}
        <motion.div
          animate={{ 
            y: [0, -85, 0],
            x: [0, 25, 0],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 360, 0]
          }}
          transition={{ 
            duration: 11, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute top-1/3 left-1/3 w-22 h-22 border-2 border-green-500/30 rounded-full"
        />
        
        <motion.div
          animate={{ 
            y: [0, 70, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 13, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 4
          }}
          className="absolute bottom-1/3 right-1/4 w-18 h-18 border-2 border-purple-500/30 rounded-full"
        />
        
        {/* Animated dots */}
        <motion.div
          animate={{ 
            x: [0, 35, 0],
            y: [0, -55, 0],
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute top-2/3 right-1/3 w-3 h-3 bg-teal-400/50 rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, -45, 0],
            y: [0, 60, 0],
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-1/2 left-1/4 w-2 h-2 bg-purple-400/50 rounded-full"
        />
        
        {/* More animated elements */}
        <motion.div
          animate={{ 
            x: [0, 50, -40, 0],
            y: [0, -45, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ 
            duration: 17, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute top-1/4 left-1/2 w-36 h-36 bg-gradient-to-br from-blue-500/15 to-indigo-500/15 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ 
            x: [0, -50, 45, 0],
            y: [0, 50, -40, 0],
            scale: [1, 0.85, 1.2, 1],
          }}
          transition={{ 
            duration: 19, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 6
          }}
          className="absolute bottom-1/3 right-1/2 w-38 h-38 bg-gradient-to-br from-emerald-500/15 to-green-500/15 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ 
            y: [0, 70, 0],
            x: [0, -30, 0],
            opacity: [0.25, 0.6, 0.25],
            rotate: [0, 360, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute top-1/2 right-2/3 w-16 h-16 border border-teal-500/25 rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, 40, 0],
            y: [0, -50, 0],
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute bottom-2/3 left-1/3 w-3 h-3 bg-green-400/60 rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, -30, 0],
            y: [0, 55, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 4
          }}
          className="absolute top-3/4 right-1/3 w-2.5 h-2.5 bg-pink-400/60 rounded-full"
        />
      </div>
      
      <div className="max-w-4xl mx-auto w-full text-center" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-5xl font-black text-white mb-6"
        >
          Let's Build <span className="text-gradient">Together</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I'm actively looking for full-time opportunities where I can create impactful applications. 
          Open to placements, contracts, and freelance projects.
        </motion.p>
        
        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          <a
            href="mailto:kunaljain0809@gmail.com"
            className="card-hover bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 flex flex-col items-center gap-3"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">Email</div>
              <div className="text-white font-semibold">kunaljain0809@gmail.com</div>
            </div>
          </a>
          
          <a
            href="tel:+917738815664"
            className="card-hover bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 flex flex-col items-center gap-3"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">Phone</div>
              <div className="text-white font-semibold">+91-7738815664</div>
            </div>
          </a>
          
          <div className="card-hover bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">Location</div>
              <div className="text-white font-semibold">Mumbai, India</div>
            </div>
          </div>
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 justify-center mb-12"
        >
          <a
            href="https://github.com/kunaljain0809"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 flex items-center justify-center text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          
          <a
            href="https://linkedin.com/in/kunaljain0809"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 flex items-center justify-center text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
        
        {/* CTA Button */}
        <motion.a
          href="mailto:kunaljain0809@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="inline-flex items-center gap-2 px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
        >
          Get In Touch <Send className="w-5 h-5" />
        </motion.a>
      </div>
    </section>
  )
}
