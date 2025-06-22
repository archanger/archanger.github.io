import Hero from '@/components/Hero'
import TechStack from './TechStack'

const Content = () => {
  return (
    <main className='m-auto flex max-w-4xl flex-col gap-32 py-16 align-middle'>
      <Hero />
      <TechStack />
    </main>
  )
}

export default Content

export const HeroSection = () => {
  return (
    <main className='text-text flex min-h-screen flex-col items-center justify-center p-8 md:flex-row'>
      <div className='order-1 max-w-lg text-center md:text-start'>
        <h1 className='text-5xl leading-tight font-bold'>
          My name is <span className='text-primary'>Kirill</span>
        </h1>
        <p className='mt-4 text-lg leading-relaxed text-gray-500'>
          I am a professional{' '}
          <span className='text-primary text-xl font-semibold'>
            Software Engineer
          </span>{' '}
          with over{' '}
          <span className='text-primary text-xl font-semibold'>10 years</span>{' '}
          of experience in{' '}
          <span className='text-primary text-xl font-semibold'>iOS</span>{' '}
          application development. My journey in IT began in 2006, exploring
          Delphi, C, and PHP before deepening my expertise in C/C++ and Java.
          Transitioning into iOS development, I have worked extensively with
          modern technologies and{' '}
          <span className='text-primary font-semibold'>
            best development practices
          </span>
          .
          <br />
          <br />I have strong experience in{' '}
          <span className='text-primary font-semibold'>Agile</span>{' '}
          environments, focusing on{' '}
          <span className='text-primary font-semibold'>clean architecture</span>
          ,
          <span className='text-primary font-semibold'>
            {' '}
            scalable solutions
          </span>
          , and{' '}
          <span className='text-primary font-semibold'>
            efficient collaboration
          </span>
          .
          <br />
          <br />
          Additionally, I have a keen interest in{' '}
          <span className='text-primary font-semibold'>
            web development (both front-end and back-end)
          </span>{' '}
          and{' '}
          <span className='text-primary font-semibold'>
            cross-platform technologies
          </span>
          .
          <br />
          <br />I am also a strong advocate of{' '}
          <span className='text-primary font-semibold'>
            Domain-Driven Design (DDD)
          </span>
          , applying its principles to build scalable, maintainable, and
          well-structured applications. I actively promote best practices in{' '}
          <span className='text-primary font-semibold'>DDD</span> and enjoy
          mentoring others in leveraging domain modeling and strategic design.
          <br />
          <br />
          Beyond coding, I am passionate about{' '}
          <span className='text-primary font-semibold'>mentoring</span>,{' '}
          <span className='text-primary font-semibold'>sharing knowledge</span>,
          and{' '}
          <span className='text-primary font-semibold'>helping teams grow</span>
          .
        </p>
      </div>

      <div className='mt-8 mb-8 flex justify-center md:order-1 md:ms-12 md:mt-0 md:mb-0'>
        <img
          src='/ava.jpg'
          alt='Kirill'
          className='w-64 rounded-lg shadow-lg md:w-96'
        />
      </div>
    </main>
  )
}
