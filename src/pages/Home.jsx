import React from 'react'
import Header from '../components/Header'
import Features from '../components/Features'
import Faq from '../components/Faq'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className=''>
        <Header/>
        <Features/>
        <Services/>
        <Testimonials/>
        <Faq/>
        <CTA/>
        <Footer/>
    </div>
  )
}

export default Home