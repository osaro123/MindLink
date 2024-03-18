import React from 'react'
import { Link } from 'react-router-dom'
import { HamburgerMenu } from './HamburgerMenu'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-4'>
        <Link to="/" className='text-[1.5rem] font-semibold'>MindLink</Link>
        <ul className='lg:flex items-center gap-8 hidden'>
            <li>
                <Link to="/about" className='text-[.9rem]'>About Us</Link>
            </li>
            <li>
                <Link className='text-[.9rem]'>FAQS</Link>
            </li>
            <li>
                <Link className='text-[.9rem]'>How it works</Link>
            </li>
            <li>
                <Link className='text-[.9rem]'>Benefits</Link>
            </li>
        </ul>
        <div className='lg:flex hidden items-center gap-4'>
            <Link to="/patients/login" className='bg-[#64a98b] text-white px-4 py-2 rounded-[4px] text-[.9rem]'>Patients</Link>
            <Link to="/doctors/login" className='text-[.9rem]'>Doctors</Link>
        </div>
        <div className='lg:hidden flex'>
            <HamburgerMenu/>
        </div>
    </nav>
  )
}

export default Navbar