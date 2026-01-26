'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Abel Solomon',
    role: 'Founder & Lead Engineer',
    image: '/images/team1.png',
  },
  {
    name: 'John Doe',
    role: 'Software Engineer',
    image: '/images/team1.png',
  },
  {
    name: 'Samuel Bekele',
    role: 'UI/UX Designer',
    image: '/images/team1.png',
  },
  {
    name: 'Liya Tesfaye',
    role: 'Cloud & DevOps Engineer',
    image: '/images/team1.png',
  },
]

export default function Team() {
  return (
    <section id='team' className='py-24 px-6 text-center'>
      <motion.div
        className='max-w-6xl mx-auto'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className='text-4xl font-bold text-navy dark:text-white mb-6'>
          Meet Our <span className='text-blue-500'>Team</span>
        </h2>

        <p className='text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto'>
          A passionate group of engineers, designers, and innovators dedicated
          to building high-quality digital solutions.
        </p>

        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className='glass-card rounded-3xl p-6 hover-glow transition-transform hover:-translate-y-2'
              whileHover={{ scale: 1.03 }}
            >
              <div className='relative w-32 h-32 mx-auto mb-4'>
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className='rounded-full object-cover border-4 border-white/40 dark:border-white/10'
                />
              </div>

              <h3 className='text-lg font-semibold text-navy dark:text-white'>
                {member.name}
              </h3>
              <p className='text-sm text-blue-500'>{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
