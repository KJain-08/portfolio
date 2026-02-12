import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kunal Jain | Full-Stack Developer',
  description: 'Full-stack developer building scalable mobile & web applications with Flutter, React, and Node.js. 2+ years of experience creating production-grade solutions.',
  keywords: ['Full-Stack Developer', 'Flutter Developer', 'React Developer', 'Node.js', 'Mobile App Development', 'Web Development'],
  authors: [{ name: 'Kunal Jain' }],
  openGraph: {
    title: 'Kunal Jain | Full-Stack Developer',
    description: 'Building scalable mobile & web applications',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
