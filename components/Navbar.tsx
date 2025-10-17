'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    if (savedTheme) setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact']

  return (
    <nav className='fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent shadow-sm transition-all'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo */}
        <Link
          href='/'
          className='text-2xl font-semibold text-navy dark:text-white flex justify-end items-center gap-2'
        >
          <Image src='/images/logo.png' height={60} width={60} alt='logo' />
          <div> EGERE DIGITAL SERVICE</div>
        </Link>

        {/* Nav Links */}
        <ul className='hidden md:flex gap-8 text-gray-700 dark:text-gray-200'>
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className='hover:text-navy dark:hover:text-blue-400 transition-colors'
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label='Toggle Theme'
          className='p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:scale-105 transition-transform'
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
