import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className='bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors'>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </main>
  )
}
