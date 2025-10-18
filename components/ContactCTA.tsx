'use client'
import { motion } from 'framer-motion'

export default function ContactCTA() {
  return (
    <section
      id='contact'
      className='relative py-24 px-6 flex justify-center items-center'
    >
      <motion.div
        className='glass-card max-w-4xl mx-auto text-center p-10 rounded-3xl'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className='text-4xl font-bold text-navy dark:text-white mb-4'>
          Ready to Build Something{' '}
          <span className='text-blue-500'>Amazing?</span>
        </h2>
        <p className='text-gray-600 dark:text-gray-300 mb-8'>
          Let’s discuss your vision and bring it to life with design,
          innovation, and technology.
        </p>
        <a
          href='/contact'
          className='inline-block px-8 py-3 rounded-full text-white bg-gradient-accent hover-glow font-medium'
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  )
}
