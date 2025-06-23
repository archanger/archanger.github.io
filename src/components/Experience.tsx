import AlfaBank from '@/assets/alfa_bank.svg?react'
import Appreal from '@/assets/Appreal.svg?react'
import Bolt from '@/assets/Bolt.svg?react'
import Lazada from '@/assets/Lazada.svg?react'
import XYB from '@/assets/XYB.svg?react'
import Place from './Place'

const Experience = () => {
  return (
    <section className='flex flex-col items-center gap-12'>
      <h2 className='text-4xl/[44px] tracking-wider text-neutral-50'>
        EXPERIENCE
      </h2>
      <Place>
        <Place.Logo>
          <XYB />
        </Place.Logo>
        <Place.Position>Senior Software Engineer</Place.Position>
        <Place.Company>XYB</Place.Company>
        <Place.Period>March 2024 - Present</Place.Period>
        <Place.Body>
          <p>
            I primarily contributed to the iOS codebase, focusing on
            transforming the existing app into a white-label product. As part of
            this effort, I introduced two key concepts:
          </p>
          <ul role='list' className='list-inside list-disc'>
            <li>
              Backend-driven UI, allowing dynamic rendering of views based on
              server responses.
            </li>
            <li>
              A single source of truth for translations shared across both iOS
              and Android.
            </li>
          </ul>
          <br />
          <p>
            To support a scalable white-label strategy, I built a Figma plugin
            to export design tokens and a corresponding import tool for each
            platform. Later, I developed a CLI tool, integrated into the CI/CD
            pipeline, that automated the recoloring and reshaping of images and
            assets. This required close collaboration with designers to capture
            the full complexity of the design system and address
            platform-specific constraints.
          </p>
          <br />
          <p>
            Following that, I transitioned into web development with React and
            Module Federation. I built several micro-frontends and introduced
            many reusable shared components to streamline team development.
          </p>
        </Place.Body>
      </Place>
      <Place>
        <Place.Logo>
          <Bolt />
        </Place.Logo>
        <Place.Position>Senior Software Engineer</Place.Position>
        <Place.Company>Bolt</Place.Company>
        <Place.Period>July 2019 - February 2024</Place.Period>
        <Place.Body>
          <p>
            From day one, I've been deeply involved in various sub-projects
            aimed at improving the core app. These range from highly technical
            initiatives, like introducing unit testing, to broader
            organizational contributions, such as designing the mobile interview
            pipeline in collaboration with HR.
          </p>
          <br />
          <p>
            I've also delivered over 100 features—from complete screen redesigns
            to subtle UX enhancements that often go unnoticed but significantly
            improve the user experience.
          </p>
          <br />
          <p>A few highlights:</p>
          <ul role='list' className='list-inside list-disc'>
            <li>
              <strong>Mentorship</strong>: I've mentored many developers,
              consistently receiving positive feedback and watching them grow
              into stronger engineers.
            </li>
            <li>
              <strong>CI/CD Setup</strong>: Established CI/CD using GitHub
              Actions, coordinating closely with sibling teams to align on
              shared workflows.
            </li>
            <li>
              <strong>Testing Culture</strong>: Raised app stability by
              introducing a unit testing culture and later guided the adoption
              of snapshot tests.
            </li>
            <li>
              <strong>Knowledge Sharing</strong>: Regularly contribute to team
              growth through internal meetups, technical talks, and thorough
              code reviews.
            </li>
            <li>
              <strong>Technical Documentation</strong>: Authored numerous design
              documents and RFCs to drive forward-thinking architecture and
              implementation strategies.
            </li>
            <li>
              <strong>Hiring Process</strong>: Built the iOS hiring team from
              scratch, defined a consistent interview process, created a shared
              question bank, and designed a live-coding task.
            </li>
          </ul>
        </Place.Body>
      </Place>
      <Place>
        <Place.Logo>
          <AlfaBank />
        </Place.Logo>
        <Place.Position>Senior iOS Developer</Place.Position>
        <Place.Company>Alfa Bank</Place.Company>
        <Place.Period>April 2018 - June 2019</Place.Period>
        <Place.Body>
          <p>
            I worked on a B2B iOS application as part of an Agile team, where I
            experienced Scrum in practice and completed several training
            sessions. The team was cross-functional, and I collaborated closely
            with business analysts, designers, backend developers, and fellow
            iOS engineers.
          </p>
          <br />
          <p>
            I was fortunate to work alongside experienced developers who
            supported me as I ramped up. We rewrote parts of the legacy
            Objective-C codebase into Swift and made Swift the standard for all
            new features.
          </p>
          <br />
          <p>
            Beyond feature work, I contributed to a company-wide initiative to
            improve CI/CD and DevOps practices across mobile teams. I learned a
            lot through collaboration with more senior engineers from other
            teams.
          </p>
        </Place.Body>
      </Place>
      <Place>
        <Place.Logo>
          <Lazada />
        </Place.Logo>
        <Place.Position>Senior iOS Developer</Place.Position>
        <Place.Company>Lazada</Place.Company>
        <Place.Period>July 2017 - February 2018</Place.Period>
        <Place.Body>
          <p>
            This was my first international experience, working alongside
            developers from diverse countries and backgrounds. I was part of the
            team responsible for the product list, a high-traffic area that many
            other domains relied on to display their content and ads—so
            cross-team collaboration quickly became a key part of my daily work.
          </p>
          <br />
          <p>
            Later, I joined a major project to integrate Alibaba's technology
            stack into our app. This involved a complete rewrite of the
            application using a mix of existing and newly developed
            components—all in Objective-C. I was specifically responsible for
            rebuilding the product list and search functionality.
          </p>
          <br />
          <p>
            It was an invaluable experience that exposed me to a large-scale
            codebase and taught me how to write performant, maintainable iOS
            code in a complex ecosystem.
          </p>
        </Place.Body>
      </Place>
      <Place>
        <Place.Logo>
          <Appreal />
        </Place.Logo>
        <Place.Position>Software Engineer iOS</Place.Position>
        <Place.Company>Appreal</Place.Company>
        <Place.Period>Aug 2013 - June 2017</Place.Period>
        <Place.Body>
          <p>
            I began my iOS career at this company, where we built mobile
            applications for various clients. While the initial focus was on iOS
            development, the team later expanded to include Android and backend
            developers, allowing us to shift our focus toward developing our
            travel-focused product.
          </p>
          <br />
          <p>
            As it was the start of my journey, I learned a great deal. I
            encountered my first real technical challenges—most notably the
            migration from iOS 6 to iOS 7, which introduced significant changes
            to both the UI and the platform.
          </p>
        </Place.Body>
      </Place>
    </section>
  )
}

export default Experience
