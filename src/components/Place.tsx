import { Children, ReactElement, ReactNode } from 'react'

const Logo = ({ children }: { children: ReactNode }) => {
  return <div className='h-[50px]'>{children}</div>
}

const Position = ({ children }: { children: ReactNode }) => {
  return <h3 className='text-2xl/[32px]'>{children}</h3>
}

const Company = ({ children }: { children: ReactNode }) => {
  return <p className='text-sm/[20px] text-slate-200'>{children}</p>
}

const Period = ({ children }: { children: ReactNode }) => {
  return <p className='text-xs/[16px] text-slate-400'>{children}</p>
}

const Body = ({ children }: { children: ReactNode }) => {
  return <div className='text-base/[30px] text-slate-300'>{children}</div>
}

type PlaceProps = {
  children: ReactElement | ReactElement[]
}

const Place = ({ children }: PlaceProps) => {
  const childArray = Children.toArray(children) as ReactElement[]

  const logo = childArray.find((child) => child.type === Place.Logo)
  const position = childArray.find((child) => child.type === Place.Position)
  const company = childArray.find((child) => child.type === Place.Company)
  const period = childArray.find((child) => child.type === Place.Period)
  const body = childArray.find((child) => child.type === Body)

  return (
    <article className='flex flex-col gap-6 self-stretch px-2 py-3 text-base/[30px] text-slate-300'>
      <div className='flex flex-col gap-6 text-slate-50 lg:flex-row'>
        {logo}
        <div className='flex grow flex-col gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-0'>
          <div className='flex flex-col'>
            {position}
            {company}
          </div>
          {period}
        </div>
      </div>
      {body}
    </article>
  )
}

Place.Logo = Logo
Place.Position = Position
Place.Company = Company
Place.Period = Period
Place.Body = Body

export default Place
