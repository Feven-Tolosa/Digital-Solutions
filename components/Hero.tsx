'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      // Slow down video playback (0.5x speed for a smooth feel)
      videoRef.current.playbackRate = 0.5
    }
  }, [])

  return (
    <section className='relative h-screen flex items-center justify-center text-center overflow-hidden'>
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className='absolute w-full h-full object-cover'
      >
        <source
          src='/videos/hero-bg-light.mp4'
          media='(prefers-color-scheme: light)'
          type='video/mp4'
        />
        <source
          src='/videos/hero-bg-dark.mp4'
          media='(prefers-color-scheme: dark)'
          type='video/mp4'
        />
      </video>

      {/* Overlay */}
      <div className='absolute inset-0 bg-white/50 dark:bg-black/50' />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='relative z-10 max-w-3xl mx-auto px-4'
      >
        <h1 className='text-4xl md:text-6xl font-bold text-navy dark:text-white mb-4'>
          Building Digital Solutions That Inspire
        </h1>
        <p className='text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8'>
          We transform ideas into powerful digital experiences — engineered for
          excellence.
        </p>
        <a
          href='#services'
          className='inline-block bg-navy text-white dark:bg-blue-600 dark:text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition'
        >
          Get Started
        </a>
      </motion.div>
    </section>
  )
}

export default Hero
