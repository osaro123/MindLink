import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Menu from './Menu'

const Header = () => {
  return (
    <header className='bg-[#f8fbfa] min-h-[100vh] sm:px-20 px-8'>
        <Navbar/>
        <Menu/>
        <Hero/>
    </header>
  )
}

export default Header