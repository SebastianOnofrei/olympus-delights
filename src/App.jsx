import { useState } from 'react'
import Header from './components/organisms/header/Header'
import Home from './pages/Home'
import Hero from './components/organisms/hero/Hero'
import Our_products from './components/organisms/our_products/Our_products'


function App() {
 

  return (
    <>
       <Home/>
       <Hero/>
       <Our_products/>
    </>
  )
}

export default App
