'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id='about' className='py-24 bg-white dark:bg-gray-950'>
      <div className='max-w-7xl mx-auto px-6 md:flex md:items-center md:gap-12'>
        {/* Image / Illustration */}
        <motion.div
          className='md:w-1/2 mb-8 md:mb-0'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src='/images/about-illustration.svg'
            alt='About us illustration'
            className='w-full h-auto'
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className='md:w-1/2'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-navy dark:text-white mb-4'>
            About Sololo Digital
          </h2>
          <p className='text-gray-700 dark:text-gray-300 mb-4'>
            We are a team of passionate engineers and designers committed to
            delivering innovative digital solutions. Our focus is on creating
            products that inspire and transform businesses.
          </p>
          <p className='text-gray-700 dark:text-gray-300'>
            From digital engineering to cloud solutions and IT security, we
            ensure every project is handled with precision and excellence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
