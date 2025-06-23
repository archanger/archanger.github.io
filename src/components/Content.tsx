import Hero from '@/components/Hero'
import Experience from './Experience'
import Projects from './Projects'
import TechStack from './TechStack'

const Content = () => {
  return (
    <main className='m-auto flex max-w-4xl flex-col gap-32 px-3 py-16'>
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
    </main>
  )
}

export default Content
