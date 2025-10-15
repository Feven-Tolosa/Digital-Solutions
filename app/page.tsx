import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className='bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-50 transition-colors'>
      <Navbar />
      <Hero />
    </main>
  )
}
