export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Resume from '@/components/resume'
import Projects from '@/components/projects'
import Testimonials from '@/components/testimonials'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      <Projects />
      <Resume />
      {/* <Testimonials /> */}
      <Contact />
    </>
  )
}
