import Fastlane from '@/assets/fastlane.svg?react'
import Flutter from '@/assets/flutter.svg?react'
import GithubActions from '@/assets/githubactions.svg?react'
import Ios from '@/assets/ios.svg?react'
import Js from '@/assets/javascript.svg?react'
import Nodejs from '@/assets/nodedotjs.svg?react'
import React from '@/assets/react.svg?react'
import Swift from '@/assets/swift.svg?react'
import Tailwind from '@/assets/tailwindcss.svg?react'
import Ts from '@/assets/typescript.svg?react'
import Vite from '@/assets/vite.svg?react'

const TechStack = () => {
  return (
    <section className='flex flex-col items-center gap-12 text-center'>
      <h2 className='text-4xl/[44px] tracking-wider text-neutral-50'>
        TECH STACK
      </h2>
      <div className='flex flex-wrap items-center justify-center gap-6'>
        <Swift />
        <Ios />
        <Fastlane />
        <GithubActions />
        <Flutter />
        <Js />
        <Ts />
        <React />
        <Tailwind />
        <Vite />
        <Nodejs />
      </div>
    </section>
  )
}

export default TechStack
