import React from 'react'
import HomePage from './pages/Home/page'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function page() {
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default page
