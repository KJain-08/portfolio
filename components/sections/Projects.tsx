'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import { PhoneForSection } from '../PhoneParallax'

const projects = [
  {
    id: 'ecommerce',
    name: 'E-Commerce Platform',
    client: 'VTS',
    icon: '🛍️',
    color: 'from-blue-500 to-blue-600',
    status: 'Live',
    description: 'Full-stack e-commerce solution with real-time inventory, payment gateway integration (Razorpay), admin dashboard, and order tracking. Built for VTS client.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Razorpay'],
    stats: [
      { label: 'Monthly Users', value: '500+' },
      { label: 'Transactions', value: '₹2L+' }
    ],
    badge: 'bg-blue-400'
  },
  {
    id: 'food',
    name: 'Restaurant Delivery Platform',
    client: 'Fyre Gig',
    icon: '🍔',
    color: 'from-orange-500 to-orange-600',
    status: 'Live',
    description: 'Complete food delivery ecosystem with real-time order tracking, Google Maps integration, admin dashboard, and third-party logistics. For Fyre Gig client.',
    tech: ['Flutter', 'Firebase', 'Google Maps', 'WebSocket'],
    stats: [
      { label: 'Active Users', value: '1000+' },
      { label: 'Avg Delivery', value: '25 min' }
    ],
    badge: 'bg-orange-400'
  },
  {
    id: 'fintech',
    name: 'Loan & Finance App',
    client: 'Client Project',
    icon: '💳',
    color: 'from-purple-500 to-purple-600',
    status: 'Live',
    description: 'Secure financial application with loan calculations, EMI tracking, document management, and secure authentication. Complex business logic implementation.',
    tech: ['Flutter', 'Node.js', 'PostgreSQL', 'JWT'],
    stats: [
      { label: 'Active Loans', value: '200+' },
      { label: 'Uptime', value: '99.9%' }
    ],
    badge: 'bg-purple-400'
  },
  {
    id: 'ai',
    name: 'AI Fire NOC Inspection',
    client: 'Final Year Project',
    icon: '🤖',
    color: 'from-green-500 to-green-600',
    status: 'Completed',
    description: 'Final-year project: AI-powered geo-verified inspection system with duplicate detection, decibel analysis, altitude validation, and comprehensive admin dashboard.',
    tech: ['Flutter', 'Express', 'AI Hashing', 'Geolocation'],
    stats: [
      { label: 'Accuracy', value: '95%' },
      { label: 'Type', value: 'Final Year' }
    ],
    badge: 'bg-green-400'
  }
]

const getTechBadgeClasses = (badge: string) => {
  const color = badge.split('-')[1]
  const classes = {
    blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    orange: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    green: 'bg-green-500/10 text-green-400 border-green-500/30'
  }
  return classes[color as keyof typeof classes] || classes.blue
}

const getStatColor = (badge: string) => {
  const color = badge.split('-')[1]
  const classes = {
    blue: 'text-blue-400',
    orange: 'text-orange-400',
    purple: 'text-purple-400',
    green: 'text-green-400'
  }
  return classes[color as keyof typeof classes] || classes.blue
}

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  
  return (
    <section id="projects" className="min-h-screen w-full py-12 px-6 relative overflow-hidden">
      <PhoneForSection sectionId="projects" />
      
      {/* Moon-like gradient backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-[550px] h-[550px] bg-gradient-radial from-green-500/10 via-green-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[650px] h-[650px] bg-gradient-radial from-pink-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-2/3 right-1/4 w-[450px] h-[450px] bg-gradient-radial from-blue-500/8 via-blue-500/3 to-transparent rounded-full blur-2xl" />
      </div>
      
      {/* Animated floating objects - Mobile only */}
      <div className="md:hidden absolute inset-0 pointer-events-none z-10">
        {/* Floating blob 1 - Green/Cyan */}
        <motion.div
          animate={{ 
            x: [0, -60, 40, 0],
            y: [0, 70, -30, 0],
            scale: [1, 1.3, 0.9, 1],
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute top-32 right-8 w-36 h-36 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-full blur-2xl"
        />
        
        {/* Floating blob 2 - Pink/Purple */}
        <motion.div
          animate={{ 
            x: [0, 50, -40, 0],
            y: [0, -50, 60, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{ 
            duration: 19, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute top-1/2 left-12 w-44 h-44 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-2xl"
        />
        
        {/* Floating blob 3 - Blue/Teal */}
        <motion.div
          animate={{ 
            x: [0, 80, -60, 0],
            y: [0, -35, 45, 0],
            scale: [1, 1.15, 0.85, 1],
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 5
          }}
          className="absolute bottom-1/3 right-6 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-full blur-2xl"
        />
        
        {/* Small floating circle */}
        <motion.div
          animate={{ 
            y: [0, -80, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute top-1/3 right-1/3 w-20 h-20 border-2 border-green-500/30 rounded-full"
        />
        
        {/* Animated dot */}
        <motion.div
          animate={{ 
            x: [0, -35, 0],
            y: [0, 55, 0],
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-cyan-400/50 rounded-full"
        />
        
        {/* Additional elements */}
        <motion.div
          animate={{ 
            x: [0, 40, -30, 0],
            y: [0, -40, 35, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute top-1/4 left-1/3 w-30 h-30 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ 
            x: [0, -45, 35, 0],
            y: [0, 55, -40, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{ 
            duration: 17, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 5
          }}
          className="absolute bottom-1/3 right-1/4 w-34 h-34 bg-gradient-to-br from-lime-500/15 to-green-500/15 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ 
            y: [0, -65, 0],
            x: [0, -20, 0],
            opacity: [0.25, 0.55, 0.25],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute bottom-1/2 left-1/2 w-14 h-14 border border-green-500/25 rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, 35, 0],
            y: [0, -50, 0],
          }}
          transition={{ 
            duration: 7.5, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 2.5
          }}
          className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-pink-400/60 rounded-full"
        />
      </div>
      
      <div className="max-w-6xl mx-auto md:mr-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Real-world applications built for actual clients, serving 1000+ active users
          </p>
        </motion.div>
        
        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-gray-700">

              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start justify-start">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-lg md:text-xl`}>
                    {project.icon}
                  </div>
                  <h3 className="text-lg md:text-2xl mx-3 md:mx-5 font-bold text-white mb-3">
                    {project.name}
                  </h3>
                </div>
                <span className="px-2 md:px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold border border-green-500/30">
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-400 text-xs md:text-sm min-h-12 md:min-h-16 mb-4 md:mb-5 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className={`px-2 md:px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${getTechBadgeClasses(project.badge)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <button className={`w-full py-2 md:py-3 bg-gradient-to-r ${project.color} text-white text-sm md:text-base font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg`}>
                View Details <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
