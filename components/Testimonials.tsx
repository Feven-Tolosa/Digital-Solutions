'use client'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sara Bekele',
    role: 'Product Manager, NexGen',
    quote:
      'Sololo Digital turned our concept into a stunning and functional platform. Their team blends creativity with precision.',
  },
  {
    name: 'Daniel Tesfaye',
    role: 'CTO, BlueSpace AI',
    quote:
      'The user experience design exceeded expectations — elegant, responsive, and engaging across all devices.',
  },
  {
    name: 'Mikiyas Alemu',
    role: 'Founder, BizCloud',
    quote:
      'Professionalism at its best. They understood our needs and delivered before the deadline.',
  },
]

export default function Testimonials() {
  return (
    <section id='testimonials' className='py-24 px-6 text-center'>
      <motion.div
        className='max-w-6xl mx-auto'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className='text-4xl font-bold text-navy dark:text-white mb-12'>
          What Our <span className='text-blue-500'>Clients Say</span>
        </h2>

        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className='glass-card p-8 rounded-3xl text-left hover-glow'
              whileHover={{ scale: 1.02 }}
            >
              <p className='text-gray-700 dark:text-gray-300 italic mb-6'>
                “{t.quote}”
              </p>
              <div className='font-semibold text-navy dark:text-white'>
                {t.name}
              </div>
              <div className='text-sm text-blue-500'>{t.role}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
