'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Smart City Dashboard',
    desc: 'Real-time urban data visualization and analytics for smarter decisions.',
    img: '/images/project1.jpg',
  },
  {
    title: 'E-Commerce Platform',
    desc: 'A scalable online marketplace with modern UI and seamless payments.',
    img: '/images/project2.jpg',
  },
  {
    title: 'AI Analytics Suite',
    desc: 'Powerful machine learning dashboards for predictive insights.',
    img: '/images/project3.jpg',
  },
]

export default function Projects() {
  return (
    <section id='projects' className='py-24 px-6 text-center'>
      <motion.div
        className='max-w-6xl mx-auto'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className='text-4xl font-bold text-navy dark:text-white mb-10'>
          Our <span className='text-blue-500'>Projects</span>
        </h2>

        <div className='grid md:grid-cols-3 gap-8'>
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className='glass-card rounded-3xl overflow-hidden hover-glow transition-transform duration-300 hover:-translate-y-2'
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={p.img}
                alt={p.title}
                width={400}
                height={250}
                className='w-full h-56 object-cover'
              />
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>{p.title}</h3>
                <p className='text-gray-600 dark:text-gray-300'>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
