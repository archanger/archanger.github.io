import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'

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
