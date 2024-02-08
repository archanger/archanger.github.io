import { HeroSection } from '@/components/hero-section'
import { ThemeProvider } from './components/theme-provider'

const App = () => (
  <ThemeProvider>
    <HeroSection />
  </ThemeProvider>
)

export default App
