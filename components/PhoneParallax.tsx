'use client'

import { motion } from 'framer-motion'
import { phoneContents } from './phone-content'

const sectionConfigs = [
  { id: 'hero', side: 'right', rotation: -15, content: 'hero' },
  { id: 'projects', side: 'left', rotation: 15, content: 'ecommerce' },
  { id: 'skills', side: 'right', rotation: -15, content: 'food' },
  { id: 'experience', side: 'left', rotation: 15, content: 'fintech' },
  { id: 'contact', side: 'right', rotation: -15, content: 'ai' }
]

export function PhoneForSection({ sectionId }: { sectionId: string }) {
  const config = sectionConfigs.find(c => c.id === sectionId)
  if (!config) return null
  
  const PhoneContent = phoneContents[config.content as keyof typeof phoneContents]
  
  return (
    <div 
      className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden"
      style={{ perspective: '1500px' }}
    >
      <motion.div
        className="absolute w-[280px] h-[580px]"
        style={{
          left: config.side === 'left' ? '-2%' : 'auto',
          right: config.side === 'right' ? '-5%' : 'auto',
          top: '50%',
          translateY: '-50%',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
        }}
        initial={{ scale: 0.8, rotateY: config.side === 'left' ? -45 : 45, opacity: 0 }}
        whileInView={{ 
          opacity: 1,
          scale: 1,
          rotateY: config.rotation,
          rotateZ: config.rotation / 3,
          y: [0, -20, 0],
        }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{
          opacity: { duration: 0.6, ease: 'easeOut' },
          scale: { duration: 0.6, ease: 'easeOut' },
          rotateY: { duration: 0.7, ease: 'easeOut' },
          rotateZ: { duration: 0.7, ease: 'easeOut' },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }
        }}
      >
        <div className="phone-mockup">
          <div className="phone-notch">
            <div className="phone-camera" />
            <div className="phone-speaker" />
          </div>
          <div className="phone-screen">
            <div className="w-full h-full overflow-y-auto scrollbar-hide">
              <PhoneContent />
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full" />
        </div>
      </motion.div>
    </div>
  )
}

export default function PhoneParallax() {
  return null
}
