import { ExternalLinkIcon } from 'lucide-react'
import ThemeSwitcher from './theme-switcher'

export const Navbar = () => {
  return (
    <nav className='fixed top-6 flex w-full items-center justify-end p-4'>
      <div className='flex items-center space-x-4 rounded-sm p-4 backdrop-blur-lg'>
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
