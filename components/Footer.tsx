'use client'

import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12'>
      <div className='max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-start'>
        {/* Company Info */}
        <div className='mb-8 md:mb-0'>
          <h3 className='text-2xl font-bold text-navy dark:text-white mb-2'>
            Digital <span className='text-gray-500'>Solutions</span>
          </h3>
          <p className='text-gray-600 dark:text-gray-400 max-w-xs'>
            Transforming ideas into EGERE DIGITAL SERVICEs with precision and
            elegance.
          </p>
        </div>

        {/* Quick Links */}
        <div className='mb-8 md:mb-0'>
          <h4 className='font-semibold mb-4'>Quick Links</h4>
          <ul className='space-y-2'>
            {['Home', 'About', 'Services', 'Projects', 'Contact'].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className='hover:text-navy dark:hover:text-blue-400 transition-colors'
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h4 className='font-semibold mb-4'>Connect With Us</h4>
          <div className='flex gap-4 mb-4'>
            <a
              href='#'
              aria-label='Instagram'
              className='hover:text-pink-500 transition-colors'
            >
              <Instagram size={20} />
            </a>
            <a
              href='#'
              aria-label='Twitter'
              className='hover:text-blue-500 transition-colors'
            >
              <Twitter size={20} />
            </a>
            <a
              href='#'
              aria-label='LinkedIn'
              className='hover:text-blue-700 transition-colors'
            >
              <Linkedin size={20} />
            </a>
          </div>
          <div className='flex items-center gap-2 text-gray-600 dark:text-gray-400'>
            <Mail size={18} />
            <span>contact@digitalsolutions.com</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='mt-12 border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-gray-500 dark:text-gray-400 text-sm'>
        &copy; {new Date().getFullYear()} EGERE DIGITAL SERVICEs. All rights
        reserved.
      </div>
    </footer>
  )
}

export default Footer
