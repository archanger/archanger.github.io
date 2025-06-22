import GitHub from '@/assets/github.svg?react'
import LinkedIn from '@/assets/linkedin.svg?react'
import Button from '@/components/Button'
import { DownloadIcon } from 'lucide-react'

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-12 text-center'>
      <img className='w-3xs' src='/ava.png' alt='Avatar' />
      <p className='text-6xl/[68px] font-bold text-slate-50'>Hi, I am Kirill</p>
      <p className='m-auto text-5xl/[56px] text-slate-50'>
        I build solid apps and define features, not just implement them
      </p>
      <p className='m-auto text-2xl/[34px] text-slate-50'>
        With over 10 years of iOS experience and hands-on work in web
        technologies like React, Tailwind, and Vite, I bring deep technical
        expertise to every project. I follow proven principles and patterns to
        deliver maintainable, high-quality code — and I'm not afraid to define
        specs, dive into backend logic, or lead complex features. I've also
        explored cross-platform frameworks like Flutter and React Native to stay
        sharp and broaden my perspective.
      </p>
      <div className='flex justify-center gap-8'>
        <Button>GET IN TOUCH</Button>
        <Button variant='icon'>
          <LinkedIn className='size-10' />
        </Button>
        <Button variant='icon'>
          <GitHub className='size-10' />
        </Button>
        <Button variant='secondary'>
          <div className='flex items-center gap-4'>
            CV <DownloadIcon />
          </div>
        </Button>
      </div>
    </section>
  )
}

export default Hero
