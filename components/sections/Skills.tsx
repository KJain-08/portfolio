'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PhoneForSection } from '../PhoneParallax'
import { useState } from 'react'
import { ChevronRight, Smartphone, Globe, Server, Database, Plug, Rocket } from 'lucide-react'

const skills = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications',
    color: 'from-blue-500 to-blue-600',
    items: ['Flutter & Dart', 'iOS & Android', 'State Management (Provider, Bloc)', 'Native APIs & Plugins']
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern frontend frameworks & libraries',
    color: 'from-purple-500 to-purple-600',
    items: ['React & Next.js', 'TypeScript & JavaScript', 'Tailwind CSS', 'Responsive Design']
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Scalable server-side solutions',
    color: 'from-green-500 to-green-600',
    items: ['Node.js & Express', 'RESTful APIs', 'Authentication & Security', 'WebSocket & Real-time']
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'Data management & optimization',
    color: 'from-orange-500 to-orange-600',
    items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis Cache']
  },
  {
    icon: Plug,
    title: 'Integrations',
    description: 'Third-party services & APIs',
    color: 'from-pink-500 to-pink-600',
    items: ['Razorpay & Stripe', 'Google Maps API', 'SMS & Email Services', 'Cloud Storage']
  },
  {
    icon: Rocket,
    title: 'DevOps & Tools',
    description: 'Deployment & version control',
    color: 'from-cyan-500 to-cyan-600',
    items: ['Git & GitHub', 'Vercel & Netlify', 'Docker', 'CI/CD Pipelines']
  }
]

export default function Skills() {
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
    <section id="skills" className="min-h-screen w-full py-12 px-6 relative">
      <PhoneForSection sectionId="skills" />
      <div className="max-w-6xl mx-auto md:ml-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white mb-3">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive skill set across the full development stack
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const isFlipped = flippedCards.has(index)
            
            return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              {/* Mobile: Flip Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  y: {
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: index * 0.2
                  }
                }}
                className="md:hidden h-56"
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
                    className={`relative w-full h-56 rounded-3xl p-6 border-[0.5px] border-white/25 flex items-center justify-center overflow-hidden`}
                    style={{ 
                      backfaceVisibility: 'hidden',
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37), inset 0 0 0 0.5px rgba(255, 255, 255, 0.2)',
                      transform: 'translateZ(20px)'
                    }}
                  >
                    {/* Subtle gradient tint from skill color */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-65`} />
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
                    <h3 className="text-xl font-black text-white text-center relative z-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">{skill.title}</h3>
                  </div>
                
                {/* Back Side - Mobile Only */}
                <div 
                  className="absolute inset-0 w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 border border-gray-700"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                      <skill.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{skill.title}</h3>
                      <p className="text-gray-400 text-xs mb-3">{skill.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    {skill.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.color}`} />
                        <span className="text-gray-300 text-[12px]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              </motion.div>
              
              {/* Desktop: Normal Card */}
              <div className="hidden md:block card-hover bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 border border-gray-700">
                <div className="flex items-start justify-start gap-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-3`}>
                    <skill.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                </div>
                <p className="text-gray-400 text-sm mb-2">{skill.description}</p>
                
                <div className="space-y-2">
                  {skill.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`} />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  )
}
