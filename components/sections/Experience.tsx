'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PhoneForSection } from '../PhoneParallax'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const experiences = [
  {
    title: 'Full-Stack Developer',
    company: 'VTS',
    type: 'Freelance',
    period: '2023 - Present',
    description: 'E-commerce Platform Development',
    color: 'from-blue-500 to-blue-600',
    achievements: [
      'Developed complete e-commerce platform with Next.js, Node.js, and MongoDB serving 500+ monthly active users',
      'Integrated Razorpay payment gateway processing ₹2L+ in transactions',
      'Built comprehensive admin dashboard for inventory and order management',
      'Implemented real-time order tracking and notification system'
    ]
  },
  {
    title: 'Mobile App Developer',
    company: 'Fyre Gig',
    type: 'Contract',
    period: '2023',
    description: 'Restaurant Delivery Application',
    color: 'from-orange-500 to-orange-600',
    achievements: [
      'Built Flutter-based food delivery application with 1000+ active users',
      'Integrated Google Maps API for real-time delivery tracking and navigation',
      'Implemented WebSocket connections for live order status updates',
      'Developed admin dashboard for restaurant and delivery management'
    ]
  },
  {
    title: 'Flutter Developer',
    company: 'Multiple Clients',
    type: 'Freelance',
    period: '2022 - 2023',
    description: 'Various Mobile Applications',
    color: 'from-purple-500 to-purple-600',
    achievements: [
      'Developed loan and finance tracking application with complex calculations',
      'Built expense tracking app with SMS parsing for automatic transaction detection',
      'Created AI-powered inspection framework for final year project'
    ]
  }
]

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())
  
  const toggleFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }
  
  return (
    <section id="experience" className="min-h-screen w-full py-12 px-6 relative">
      <PhoneForSection sectionId="experience" />
      <div className="max-w-6xl mx-auto md:mr-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-1 md:mb-3">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>
        
        <div className="space-y-3">
          {experiences.map((exp, index) => {
            const isFlipped = flippedCards.has(index)
            
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              {/* Mobile: Flip Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  y: {
                    duration: 2.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.3
                  }
                }}
                className="md:hidden"
              >
                <div 
                  className={`relative w-full transition-transform duration-500 cursor-pointer`}
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                  }}
                  onClick={() => toggleFlip(index)}
                >
                  {/* Front Side - Mobile Only */}
                  <div 
                    className={`relative w-full h-72 rounded-3xl p-6 border-[0.5px] border-white/25 flex flex-col items-center justify-center overflow-hidden`}
                    style={{ 
                      backfaceVisibility: 'hidden',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 0 0 0.5px rgba(255, 255, 255, 0.2)',
                      transform: 'translateZ(20px)'
                    }}
                  >
                    {/* Subtle gradient tint from experience color */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-65`} />
                    {/* Top glass highlight */}
                    <div className="absolute top-0 left-0 right-0 h-1/5 bg-gradient-to-b from-white/30 to-transparent" />
                    {/* Frosted edge glow */}
                    <div className="absolute inset-0 rounded-3xl" style={{ boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.6)' }} />
                    {/* Curved glossy blob effect */}
                    {/* <motion.div
                      className="absolute"
                      animate={{ 
                        x: ['-60%', '120%'],
                        y: ['-20%', '20%']
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        repeatDelay: 2,
                        ease: 'easeInOut' 
                      }}
                      style={{ 
                        width: '60%',
                        height: '80%',
                        top: '20%',
                        left: '20%',
                        background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.15) 40%, transparent 70%)',
                        filter: 'blur(30px)',
                        transform: 'rotate(-25deg)',
                        borderRadius: '50%'
                      }}
                    /> */}
                    <h3 className="text-xl font-black text-white text-center mb-2 relative z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">{exp.title}</h3>
                    <p className="text-sm text-white/95 text-center relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">{exp.company}</p>
                  </div>
                
                {/* Back Side - Mobile Only */}
                <div 
                  className="absolute inset-0 w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 border border-gray-700 "
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                  <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                    {exp.company}
                  </p>
                  
                  <ul className="space-y-1.5 text-gray-300">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2 text-xs">
                        <span className={`mt-0.5 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>▹</span>
                        <span className='text-[12px]'>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </motion.div>
              
              {/* Desktop: Normal Card */}
              <div className="hidden md:block card-hover bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-700">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className={`font-semibold mb-1 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company} • {exp.type}
                    </p>
                    <p className="text-gray-400 text-sm">{exp.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className={`px-4 py-2 rounded-full text-sm font-bold border bg-gradient-to-r ${exp.color} bg-opacity-20 backdrop-blur-sm`}>
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-1 text-gray-300">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-2">
                      <span className={`mt-0 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  )
}
