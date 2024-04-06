import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Faq from './components/Faq'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-y-visible overflow-x-clip'>
      <Navbar/>
      <Hero/>
      <Section1/>
      <Section2/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App