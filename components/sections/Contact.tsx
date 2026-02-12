'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { PhoneForSection } from '../PhoneParallax'

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  
  return (
    <section id="contact" className="min-h-screen w-full py-24 px-6 flex items-center relative">
      <PhoneForSection sectionId="contact" />
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
