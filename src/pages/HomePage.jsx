"use client";

import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import CompanyDetails from '../components/CompanyDetails'
import Contact from '../components/Contact'

function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <CompanyDetails />
      <Contact />
    </main>
  )
}

export default HomePage
