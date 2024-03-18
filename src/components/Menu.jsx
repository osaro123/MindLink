import React from 'react'
import { Link } from 'react-router-dom'
import {IoClose} from "react-icons/io5"

const Menu = () => {
  return (
    <div className='h-[100vh] absolute top-0 left-0 w-full bg-[#64a98b] p-8 hidden'>
        <div className='flex items-center justify-between'>
            <h3 className='text-[1.5rem] font-semibold'>MindLink</h3>
            <IoClose size={40} color='#fff'/>
        </div>
        <ul className='flex gap-16 flex-col pt-24'>
                <li>
                    <Link className='text-[2rem] text-[#fff] font-semibold'>About Us</Link>
                </li>
                <li>
                    <Link className='text-[2rem] text-[#fff] font-semibold'>FAQS</Link>
                </li>
                <li>
                    <Link className='text-[2rem] text-[#fff] font-semibold'>How it works</Link>
                </li>
                <li>
                    <Link className='text-[2rem] text-[#fff] font-semibold'>Benefits</Link>
                </li>
            </ul>
    </div>
  )
}

export default Menu