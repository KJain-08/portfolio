'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { PhoneForSection } from '../PhoneParallax'
import { useState } from 'react'

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
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set())
  
  const toggleFlip = (projectId: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(projectId)) {
        newSet.delete(projectId)
      } else {
        newSet.add(projectId)
      }
      return newSet
    })
  }
  
  return (
    <section id="projects" className="min-h-screen w-full py-12 px-6 relative">
      <PhoneForSection sectionId="projects" />
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
          {projects.map((project, index) => {
            const isFlipped = flippedCards.has(project.id)
            
            return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-auto md:h-auto"
              style={{ perspective: '1000px' }}
            >
              {/* Mobile: Flip Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  y: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
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
                  onClick={() => toggleFlip(project.id)}
                >
                  {/* Front Side - Mobile Only */}
                  <div 
                    className={`relative w-full h-64 rounded-3xl p-6 border-[0.5px] border-white/25 flex items-center justify-center overflow-hidden`}
                    style={{ 
                      backfaceVisibility: 'hidden',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 0 0 0.5px rgba(255, 255, 255, 0.2)',
                      transform: 'translateZ(20px)'
                    }}
                  >
                    {/* Subtle gradient tint from project color */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-65`} />
                    {/* Top glass highlight */}
                    <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/30 to-transparent" />
                    {/* Frosted edge glow */}
                    <div className="absolute inset-0 rounded-3xl" style={{ boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.6)' }} />
                    {/* Curved glossy blob effect */}
                    <motion.div
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
                    />
                    <h3 className="text-2xl font-black text-white text-center relative z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">{project.name}</h3>
                  </div>
                
                {/* Back Side - Mobile Only */}
                <div 
                  className="absolute inset-0 w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 border border-gray-700"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-2">
                      <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-lg`}>
                        {project.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white">{project.name}</h3>
                    </div>
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold border border-green-500/30">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 text-xs mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${getTechBadgeClasses(project.badge)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className={`w-full py-2 bg-gradient-to-r ${project.color} text-white text-sm font-semibold rounded-xl`}>
                    View Details <ArrowRight className="w-3 h-3 inline" />
                  </button>
                </div>
              </div>
              </motion.div>
              
              {/* Desktop: Normal Card */}
              <div className="hidden md:block card-hover bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 border border-gray-700">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start justify-start ">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-xl`}>
                      {project.icon}
                    </div>
                    <h3 className="text-2xl mx-5 font-bold text-white mb-3">
                      {project.name}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-bold border border-green-500/30">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm min-h-16 mb-5 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${getTechBadgeClasses(project.badge)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className={`w-full py-3 bg-gradient-to-r ${project.color} text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg`}>
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  )
}
