import { cn } from '@/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-sm text-2xl/[32px] transition-colors text-slate-50 h-16 px-6 py-4 cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-slate-500 hover:bg-slate-600',
        icon: 'p-3 size-16 bg-slate-500 hover:bg-slate-600',
        secondary:
          'border-slate-500 border-2 hover:bg-slate-800 text-slate-200 hover:text-slate-50',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
)

const Button = ({
  children,
  className,
  variant,
  href,
  download,
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    href?: string
    download?: boolean | string
  }) => {
  if (href) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        download={download}
        className={cn(buttonVariants({ variant }), className)}
      >
        {children}
      </a>
    )
  }
  return (
    <button className={cn(buttonVariants({ variant }), className)}>
      {children}
    </button>
  )
}

export default Button
