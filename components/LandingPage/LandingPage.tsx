import React from 'react'
import Border from './Border'
import Features from './Features'
import Hero from './Hero'
import HowItWorks from './HowItWorks'

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Border />
      <Features />
      <Border/>
      <HowItWorks />
    </div>
  )
}

export default LandingPage
