import { useState } from 'react'
import Header from './components/organisms/header/Header'
import Home from './pages/Home'
import Hero from './components/organisms/hero/Hero'
import Our_products from './components/organisms/our_products/Our_products'
import Why_us from './components/organisms/why_us/Why_us'
import Faq from './components/organisms/faq/Faq'
import Footer from './components/organisms/footer/Footer'

function App() {
 

  return (
    <>
       <Home/>
       <Hero/>
       <Our_products/>
       <Why_us/>
       <Faq/>
       <Footer/>
    </>
  )
}

export default App
