import Hero from '@/components/Hero'
import Experience from './Experience'
import Navbar from './Navbar'
import Projects from './Projects'
import TechStack from './TechStack'

const Content = () => {
  return (
    <main className='relative m-auto flex max-w-4xl flex-col gap-32 px-3 pt-16 pb-16 md:pt-32'>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
    </main>
  )
}

export default Content
