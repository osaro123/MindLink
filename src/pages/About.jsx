import React from 'react'
import Navbar from '../components/Navbar'
import image1 from "../assets/image1.jpg"
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div className='bg-[#f8fbfa] min-h-[100vh]'>
        <div className='mx-16'>
            <Navbar/>
            <div className='mt-24 flex items-center justify-between'>
                <div className='max-w-[600px]'>
                    <h1 className='text-[2rem] font-semibold pb-4'>Empower Your Mental Well-Being with MindLink</h1>
                    <p>Discover a compassionate and user-friendly web-based mental health application designed to provide support, guidance, and connection for individuals facing challenges like depression and anxiety. Connect with experienced mental health professionals through live chat or video conferencing for personalized consultations tailored to your needs. Our platform goes beyond individual consultations; it fosters a sense of community where users can share their experiences, offer motivation, and find support from others going through similar challenges. Whether you're a patient seeking professional help, a medical expert offering guidance, or an admin ensuring a safe and secure environment, our application is dedicated to promoting mental well-being and creating a supportive community for everyone involved.</p>
                </div>
                <div className='hidden md:block'>
                    <img src={image1} className='h-[500px] w-full' />
                </div>
            </div>
            <CTA/>
            <Footer/>
        </div>
    </div>
  )
}

export default About