import { ExternalLinkIcon } from 'lucide-react'
import LinkedIn from '../assets/linkedin.svg?react'
import ThemeSwitcher from './theme-switcher'

export const Navbar = () => {
  return (
    <nav className='sticky top-6 flex w-full items-center justify-end p-4 md:fixed'>
      <div className='flex items-center space-x-4 rounded-sm p-4 backdrop-blur-lg'>
        <a
          href='https://codedriven.thinkific.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary flex items-center border-b border-transparent align-middle hover:border-current'
          aria-label='Courses'
        >
          Courses
          <ExternalLinkIcon className='-mt-1.5 ml-1' size={16} />
        </a>
        <a
          href='https://www.linkedin.com/in/kirill-chuyanov/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary flex items-center border-b border-transparent p-1 align-middle hover:border-current'
          aria-label='LinkedIn'
        >
          <LinkedIn className='-mt-[2px] size-4' />
          <ExternalLinkIcon className='-mt-1.5 ml-1' size={16} />
        </a>
        <a
          href='https://medium.com/@archanger'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary flex items-center border-b border-transparent align-middle hover:border-current'
          aria-label='Blog'
        >
          Blog <ExternalLinkIcon className='-mt-1.5 ml-1' size={16} />
        </a>
        <ThemeSwitcher />
      </div>
    </nav>
  )
}
