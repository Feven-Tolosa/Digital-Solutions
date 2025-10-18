import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'

import Footer from '@/components/Footer'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import ContactCTA from '@/components/ContactCTA'

export default function Home() {
  return (
    <main className='relative min-h-screen text-gray-900 dark:text-gray-50 overflow-hidden'>
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className='fixed inset-0 w-full h-full object-cover -z-10'
      >
        <source src='/videos/hero-bg-dark.mp4' type='video/mp4' />
      </video>

      {/* 🔹 Dark/Light Overlay */}
      <div className='fixed inset-0 bg-gray-750/50 -z-10 backdrop-blur-[2px]' />

      {/* 🔹 Content */}
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  )
}
