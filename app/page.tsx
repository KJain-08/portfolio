'use client'

import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      {/* Gradient Background */}
      <div className="gradient-moon" />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
