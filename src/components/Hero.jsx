import React from 'react'
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"

const Hero = () => {
  return (
    <div className='pt-24 flex items-center justify-between'>
        <div className='max-w-[600px]'>
            {/* <small className='text-[0.833rem] text-[#333]'>Mental Health</small> */}
            <h1 className='sm:text-[3rem] text-[2.2rem] text-[#0E111B] font-bold'>Empowering Minds, Connecting Hearts.</h1>
            <p className='sm:text-[1.2rem] text-[1rem] text-[#333] font-normal pt-4'>Welcome to MindLink, a compassionate space where individuals facing mental health challenges find support, guidance, and understanding. </p>
            <button className='bg-[#64a98b] text-white px-4 py-2 rounded-[4px] text-[1rem] mt-8'>Get in touch</button>
        </div>
        <div className='relative xl:flex hidden gap-2'>
            <img src={image1} className='w-[250px]'/>
            <img src={image2} className='w-[250px] pt-16'/>
        </div>
    </div>
  )
}

export default Hero