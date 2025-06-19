'use client'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Contact from '@/components/sections/Contact'
import FloatingElements from '@/components/ui/FloatingElements'
import ThemeToggle from '@/components/layout/toggleDarkMode'
import dynamic from 'next/dynamic'

// Dynamic Import لللودر لتحسين الأداء
const SunspotLoaderComponent = dynamic(
  () => import('@/components/layout/SunspotLoaderComponent'),
  { 
    loading: () => <div className="fixed inset-0 bg-black z-50 flex justify-center items-center">Loading...</div>,
    ssr: false 
  }
)

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // محاكاة تحميل البيانات (استبدل هذا بالتحميل الفعلي)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 ثواني (يمكن تعديل المدة)

    return () => clearTimeout(timer)
  }, [])


    const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 100 : prev + 10))
    }, 300)

    return () => clearInterval(interval)
  }, [])





  return (
    <>
      <ThemeToggle />

   {isLoading ? (
        <SunspotLoaderComponent />
      ) : (
        <>
          <Head>
            <title>Khaled Mohamed - Full Stack Developer</title>
            <meta 
              name="description" 
              content="Full Stack Developer with expertise in React and Node.js" 
            />

 
    


          </Head>
          <Header />
          <main>
            <Hero />
            <Projects />
            <Skills />
            <Experience />
            <Contact />
          </main>
          <Footer />
          <FloatingElements />
        </>
      )}  
    </>
  )
}