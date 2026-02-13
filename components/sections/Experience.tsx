'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PhoneForSection } from '../PhoneParallax'

const experiences = [
  {
    title: 'Full-Stack Developer',
    company: 'VTS',
    type: 'Freelance',
    period: '2023 - Present',
    description: 'E-commerce Platform Development',
    color: 'from-blue-500 to-blue-600',
    achievements: [
      'Developed complete e-commerce platform with Next.js, Node.js, and MongoDB.',
      'Integrated Razorpay payment gateway processing online transactions',
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
      'Built Flutter-based food delivery application with active users',
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
  
  return (
    <section id="experience" className="min-h-screen w-full py-12 px-6 relative overflow-hidden">
      <PhoneForSection sectionId="experience" />
      
      {/* Moon-like gradient backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-gradient-radial from-blue-500/10 via-blue-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-[600px] h-[600px] bg-gradient-radial from-purple-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-gradient-radial from-cyan-500/8 via-cyan-500/3 to-transparent rounded-full blur-2xl" />
      </div>
      
      {/* Animated floating objects - Mobile only */}
      <div className="md:hidden absolute inset-0 pointer-events-none z-10">
        {/* Floating blob 1 - Blue/Purple */}
        <motion.div
          animate={{ 
            x: [0, 50, -30, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
        />
        
        {/* Floating blob 2 - Orange/Pink */}
        <motion.div
          animate={{ 
            x: [0, -40, 60, 0],
            y: [0, 50, -40, 0],
            scale: [1, 0.9, 1.3, 1],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute top-1/3 right-10 w-40 h-40 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-2xl"
        />
        
        {/* Floating blob 3 - Cyan/Blue */}
        <motion.div
          animate={{ 
            x: [0, 70, -50, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 4
          }}
          className="absolute bottom-1/4 left-5 w-36 h-36 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"
        />
        
        {/* Small floating circles */}
        <motion.div
          animate={{ 
            y: [0, -100, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-purple-500/30 rounded-full"
        />
        
        <motion.div
          animate={{ 
            y: [0, 80, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute bottom-1/3 right-1/4 w-20 h-20 border-2 border-orange-500/30 rounded-full"
        />
        
        {/* Animated dots */}
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute top-1/4 right-1/3 w-3 h-3 bg-blue-400/50 rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-1/2 left-1/3 w-2 h-2 bg-purple-400/50 rounded-full"
        />
        
        {/* Additional floating blobs */}
        <motion.div
          animate={{ 
            x: [0, 45, -35, 0],
            y: [0, -45, 30, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute top-1/4 right-1/4 w-28 h-28 bg-gradient-to-br from-yellow-500/15 to-orange-500/15 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ 
            x: [0, -50, 40, 0],
            y: [0, 50, -35, 0],
            scale: [1, 0.85, 1.15, 1],
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 6
          }}
          className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-gradient-to-br from-teal-500/15 to-cyan-500/15 rounded-full blur-xl"
        />
        
        {/* More circles and dots */}
        <motion.div
          animate={{ 
            x: [0, 25, 0],
            y: [0, -70, 0],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 11, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute top-2/3 left-1/4 w-16 h-16 border border-cyan-500/25 rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, 30, 0],
            y: [0, 45, 0],
          }}
          transition={{ 
            duration: 8.5, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 4
          }}
          className="absolute top-1/3 left-1/2 w-2.5 h-2.5 bg-orange-400/60 rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, -25, 0],
            y: [0, -40, 0],
          }}
          transition={{ 
            duration: 6.5, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 1.5
          }}
          className="absolute bottom-1/3 right-2/3 w-2 h-2 bg-teal-400/60 rounded-full"
        />
      </div>
      
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
        
        <div className="space-y-3 md:space-y-4">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-hover bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl md:rounded-3xl p-4 md:p-8 border border-gray-700"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2 md:mb-3">
                <div>
                  <h3 className="text-lg md:text-2xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className={`text-sm md:text-base font-semibold mb-1 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                    {exp.company} • {exp.type}
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm">{exp.description}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold border bg-gradient-to-r ${exp.color} bg-opacity-20 backdrop-blur-sm`}>
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-1 md:space-y-2 text-gray-300">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-2">
                    <span className={`mt-0.5 md:mt-1 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>▹</span>
                    <span className="text-xs md:text-base">{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
