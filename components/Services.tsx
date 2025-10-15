'use client'

import { motion } from 'framer-motion'
import { Cpu, Cloud, ShieldCheck, Settings } from 'lucide-react'

const services = [
  {
    title: 'Digital Engineering',
    description:
      'We deliver cutting-edge digital engineering solutions tailored to your business.',
    icon: <Cpu size={32} />,
  },
  {
    title: 'Cloud Solutions',
    description:
      'Scalable and secure cloud infrastructure for seamless operations.',
    icon: <Cloud size={32} />,
  },
  {
    title: 'IT Security',
    description:
      'Protect your data and systems with our robust security solutions.',
    icon: <ShieldCheck size={32} />,
  },
  {
    title: 'Automation & Consultancy',
    description:
      'Optimize processes and boost efficiency with expert guidance.',
    icon: <Settings size={32} />,
  },
]

const Services = () => {
  return (
    <section id='services' className='py-24 bg-gray-50 dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-navy dark:text-white mb-6'>
          Our Services
        </h2>
        <p className='text-gray-600 dark:text-gray-300 mb-12'>
          We provide a range of high-quality digital services to help your
          business thrive.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className='bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow'
            >
              <div className='text-navy dark:text-blue-400 mb-4'>
                {service.icon}
              </div>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                {service.title}
              </h3>
              <p className='text-gray-600 dark:text-gray-300'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
