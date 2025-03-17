import { HeroSection } from '@/components/hero-section'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'

const App = () => (
  <ThemeProvider>
    <Navbar />
    <HeroSection />
  </ThemeProvider>
)

export default App
