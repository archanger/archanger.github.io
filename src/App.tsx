import Content from '@/components/Content'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'

const App = () => (
  <ThemeProvider>
    <Navbar />
    <Content />
    {/* <HeroSection /> */}
  </ThemeProvider>
)

export default App
