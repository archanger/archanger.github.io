import { motion } from 'framer-motion'
import { ReactNode } from 'react'

const ScrollLink = ({ to, children }: { to: string; children: ReactNode }) => {
  return (
    <motion.a
      className='flex items-center justify-center px-2 text-center'
      whileTap={{ scale: 0.95 }}
      onClick={(e) => {
        e.preventDefault()
        document.getElementById(to)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }}
      href={`#${to}`}
    >
      {children}
    </motion.a>
  )
}

export default ScrollLink
