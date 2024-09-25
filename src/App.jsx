import React from 'react'
import HeroPage from './Components/HeroPage'
import OfferPage from './Components/OfferPage'
import ServicePage from './Components/ServicePage'
import FooterPage from './Components/FooterPage'

const App = () => {
  return (
    <main className='w-full'>
      <HeroPage/>
      <OfferPage/>
      <ServicePage/>
      <FooterPage/>
    </main>
  )
}

export default App
