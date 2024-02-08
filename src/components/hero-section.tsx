export const HeroSection = () => {
  return (
    <div className='text-text flex min-h-screen flex-col items-center justify-center p-8 md:flex-row'>
      <div className='order-1 max-w-lg text-center md:text-start'>
        <h1 className='text-5xl leading-tight font-bold'>
          My name is <span className='text-primary'>Kirill</span>
        </h1>
        <p className='text-secondary mt-4 text-lg'>
          I am a professional{' '}
          <span className='text-primary text-2xl font-bold'>
            Software Engineer
          </span>{' '}
          with more than 10 years of experience
        </p>
      </div>

      <div className='mt-8 mb-8 flex justify-center md:order-1 md:ms-12 md:mt-0 md:mb-0'>
        <img
          src='/ava.jpg'
          alt='Kirill'
          className='w-64 rounded-lg shadow-lg md:w-96'
        />
      </div>
    </div>
  )
}
