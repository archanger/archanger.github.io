import { createContext, PropsWithChildren, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'auto'

type ThemeContextProps = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'auto',
  setTheme: () => {},
})

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const getSystemPreference = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }

  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'auto'
  })

  useEffect(() => {
    const applyTheme = (selectedTheme: Theme) => {
      const resolvedTheme =
        selectedTheme === 'auto' ? getSystemPreference() : selectedTheme
      document.documentElement.classList.toggle(
        'dark',
        resolvedTheme === 'dark'
      )
    }

    applyTheme(theme)
    localStorage.setItem('theme', theme)

    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (theme === 'auto') {
        applyTheme('auto')
      }
    }
    query.addEventListener('change', handleChange)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext }
