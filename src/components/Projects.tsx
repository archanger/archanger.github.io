import Project from './Project'

const Projects = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-12 text-center'>
      <p className='text-4xl/[44px] text-neutral-50'>PROJECTS</p>
      <div className='flex flex-col gap-12 lg:flex-row'>
        <Project link='https://codedriven.thinkific.com/courses/ddd-in-mobile'>
          <Project.BackgroundImage
            src='ddd_in_mobile.png'
            alt='DDD in Mobile'
          />
          <Project.Title>DDD in Mobile</Project.Title>
          <Project.Description>COURSE</Project.Description>
        </Project>
        <Project link='https://medium.com/@archanger'>
          <Project.BackgroundImage src='medium.png' alt='Medium Articles' />
          <Project.Title>Medium</Project.Title>
          <Project.Description>BLOG</Project.Description>
        </Project>
      </div>
    </section>
  )
}

export default Projects
