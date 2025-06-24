import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const SECTION_IDS = ['hero', 'tech-stack', 'projects', 'experience']

export function useFramerScrollSpy() {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0])
  const { scrollY } = useScroll()

  useEffect(() => {
    SECTION_IDS.forEach((id) => {
      sectionRefs.current[id] = document.getElementById(id)
    })
  }, [])

  useMotionValueEvent(scrollY, 'change', () => {
    const offsetY = window.scrollY
    const windowHeight = window.innerHeight

    for (const id of SECTION_IDS) {
      const el = sectionRefs.current[id]
      if (!el) continue

      const { height } = el.getBoundingClientRect()
      const absoluteTop = el.offsetTop

      if (
        offsetY >= absoluteTop - windowHeight * 0.3 &&
        offsetY < absoluteTop + height - windowHeight * 0.3
      ) {
        setActiveSection(id)
        break
      }
    }
  })

  return activeSection
}
