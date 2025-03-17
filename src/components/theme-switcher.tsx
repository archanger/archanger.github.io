import { MoonIcon, SunIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from './useTheme'

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [position, setPosition] = useState<'light' | 'dark' | 'auto'>(theme)

  useEffect(() => {
    setPosition(theme)
  }, [theme])

  const toggleTheme = () => {
    const newTheme =
      position === 'light' ? 'auto' : position === 'auto' ? 'dark' : 'light'
    setTheme(newTheme)
    setPosition(newTheme)
  }

  return (
    <div
      className='relative flex h-8 w-20 cursor-pointer items-center rounded-full bg-gray-300 px-1 transition-all dark:bg-gray-700'
      onClick={toggleTheme}
    >
      <div
        className={`absolute h-6 w-6 rounded-full bg-white shadow-md transition-all ${
          position === 'light'
            ? 'left-1'
            : position === 'auto'
              ? 'left-1/2 -translate-x-1/2'
              : 'right-1'
        }`}
      ></div>
      <SunIcon
        className={`absolute left-2 h-4 w-4 ${position === 'light' ? 'text-gray-900' : 'text-gray-500'}`}
      />
      <span className='absolute left-1/2 -translate-x-1/2 text-xs text-gray-500'>
        A
      </span>
      <MoonIcon
        className={`absolute right-2 h-4 w-4 ${
          position === 'dark' ? 'text-gray-900' : 'text-gray-500'
        }`}
      />
    </div>
  )
}
