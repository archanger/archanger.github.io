import { ExternalLinkIcon } from 'lucide-react'
import { Children, ImgHTMLAttributes, ReactElement, ReactNode } from 'react'

const BackgroundImage = ({ src, alt }: ImgHTMLAttributes<HTMLImageElement>) => {
  return <img className='absolute top-0 object-contain' src={src} alt={alt} />
}

const Title = ({ children }: { children: ReactNode }) => {
  return <h3 className='text-2xl/[32px]'>{children}</h3>
}

const Description = ({ children }: { children: ReactNode }) => {
  return <h4 className='text-xs/[16px]'>{children}</h4>
}

type ProjectProps = {
  link: string
  children: ReactElement | ReactElement[]
}

const Project = ({ link, children }: ProjectProps) => {
  const childArray = Children.toArray(children) as ReactElement[]

  const background = childArray.find(
    (child) => child.type === Project.BackgroundImage
  )
  const title = childArray.find((child) => child.type === Project.Title)
  const description = childArray.find(
    (child) => child.type === Project.Description
  )
  return (
    <article className='relative h-64 w-96 overflow-hidden rounded-sm border-1 border-slate-600 duration-300 hover:shadow-xl hover:shadow-slate-300/50'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        {background}
        <div className='absolute bottom-0 flex w-full items-center justify-between bg-slate-600 px-6 py-2 text-slate-50'>
          <div className='flex flex-col items-start'>
            {description}
            {title}
          </div>
          <ExternalLinkIcon className='size-6' />
        </div>
      </a>
    </article>
  )
}

Project.BackgroundImage = BackgroundImage
Project.Title = Title
Project.Description = Description

export default Project
