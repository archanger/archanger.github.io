import { createContext, PropsWithChildren, useEffect, useState } from 'react'

type Theme = {
  theme: string
  setTheme: (theme: string) => void
}

const ThemeContext = createContext<Theme>({
  theme: 'light',
  setTheme: () => {},
})

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState('auto')
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
