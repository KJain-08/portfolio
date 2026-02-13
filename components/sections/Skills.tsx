'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PhoneForSection } from '../PhoneParallax'
import { Smartphone, Globe, Server, Database, Plug, Rocket } from 'lucide-react'

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
  
  return (
    <section id="skills" className="min-h-screen w-full py-12 px-6 relative overflow-hidden">
      <PhoneForSection sectionId="skills" />
      
      {/* Moon-like gradient backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-10 w-[600px] h-[600px] bg-gradient-radial from-purple-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[550px] h-[550px] bg-gradient-radial from-orange-500/10 via-orange-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-gradient-radial from-cyan-500/8 via-cyan-500/3 to-transparent rounded-full blur-2xl" />
      </div>
      
      {/* Animated floating objects - Mobile only */}
      <div className="md:hidden absolute inset-0 pointer-events-none z-10">
        {/* Floating blob 1 - Purple/Pink */}
        <motion.div
          animate={{ 
            x: [0, 55, -45, 0],
            y: [0, -55, 35, 0],
            scale: [1, 1.25, 0.85, 1],
          }}
          transition={{ 
            duration: 17, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
          className="absolute top-24 left-8 w-38 h-38 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
        />
        
        {/* Floating blob 2 - Cyan/Blue */}
        <motion.div
          animate={{ 
            x: [0, -55, 70, 0],
            y: [0, 60, -45, 0],
            scale: [1, 0.9, 1.25, 1],
          }}
          transition={{ 
            duration: 21, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 4
          }}
          className="absolute top-2/3 right-10 w-42 h-42 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl"
        />
        
        {/* Floating blob 3 - Orange/Yellow */}
        <motion.div
          animate={{ 
            x: [0, 65, -55, 0],
            y: [0, -45, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ 
            duration: 19, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-1/4 left-12 w-36 h-36 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-2xl"
        />
        
        {/* Floating circles */}
        <motion.div
          animate={{ 
            y: [0, -70, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute top-1/2 right-1/4 w-18 h-18 border-2 border-pink-500/30 rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, 40, 0],
            y: [0, -60, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-cyan-400/50 rounded-full"
        />
        
        {/* More animated elements */}
        <motion.div
          animate={{ 
            x: [0, 50, -40, 0],
            y: [0, -50, 40, 0],
            scale: [1, 1.2, 0.85, 1],
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-br from-rose-500/15 to-red-500/15 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ 
            x: [0, -55, 45, 0],
            y: [0, 45, -50, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 6
          }}
          className="absolute bottom-1/2 right-1/4 w-35 h-35 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ 
            y: [0, 75, 0],
            x: [0, 30, 0],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 360, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 4
          }}
          className="absolute top-2/3 left-1/4 w-16 h-16 border border-orange-500/25 rounded-full"
        />
        
        <motion.div
          animate={{ 
            x: [0, -30, 0],
            y: [0, 50, 0],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute top-1/2 right-2/3 w-3 h-3 bg-rose-400/60 rounded-full"
        />
      </div>
      
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-gray-700"
            >
              <div className="flex items-start justify-start gap-3 md:gap-4 mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                  <skill.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white">{skill.title}</h3>
              </div>
              <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">{skill.description}</p>
              
              <div className="space-y-1.5 md:space-y-2">
                {skill.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r ${skill.color}`} />
                    <span className="text-gray-300 text-xs md:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
