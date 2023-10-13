import LandingPage from '@/components/LandingPage/LandingPage'
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const index = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer/>
    </div>
  )
  
}

export default index