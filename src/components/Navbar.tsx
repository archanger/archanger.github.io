import { useFramerScrollSpy } from '@/hooks/useFramerScrollSpy'
import { cn } from '@/lib/utils'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollLink from './ScrollLink'

const sections = [
  { id: 'hero', label: 'HOME' },
  { id: 'tech-stack', label: 'TECH STACK' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'experience', label: 'EXPERIENCE' },
]

const Navbar = () => {
  const { scrollY } = useScroll()
  const active = useFramerScrollSpy()

  const height = useTransform(scrollY, [0, 100], [64, 48])
  const fontSize = useTransform(scrollY, [0, 100], ['24px', '16px'])
  const lineHeight = useTransform(scrollY, [0, 100], ['32px', '24px'])

  return (
    <motion.nav
      style={{ height, fontSize, lineHeight }}
      className={cn(
        'fixed top-8 z-10 h-16 flex-col overflow-hidden rounded-full bg-slate-300/10 text-2xl/[32px] tracking-wider text-neutral-50',
        'shadow-[0_2px_8px_rgba(255,255,255,0.25)] inset-shadow-[0.5px_1px_1px_rgba(255,255,255,0.9),-0.5px_-1px_1px_rgba(255,255,255,1)] backdrop-blur-[10px]',
        'hidden md:flex md:w-3xl lg:w-4xl',
        'left-1/2 -translate-x-1/2'
      )}
    >
      <ul className='flex grow justify-center px-8 md:gap-8 lg:gap-16'>
        {sections.map(({ id, label }) => (
          <li
            key={id}
            className={`flex items-stretch duration-300 ${active === id ? 'bg-slate-950/50' : ''}`}
          >
            <ScrollLink
              to={id}
              aria-current={active === id ? 'page' : undefined}
            >
              {label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}

export default Navbar
