import React from 'react'
import { Link } from 'react-router-dom'
import registerImage from "../assets/register-image.jpg"

const PatientRegister = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex-1 pt-4 bg-[#f8fbfa]'>
        <Link to="/" className='pl-8 font-semibold text-[1.5rem]'>MindLink</Link>
        <div className='mt-[6rem] md:mx-20 mx-8 '>
            <h1 className='text-[2rem] font-semibold mb-8'>Register</h1>
            <form className='flex flex-col gap-4'>
                <div className='flex flex-col'>
                    <label htmlFor="" className='py-2'>Username</label>
                    <input type="text" className='border rounded px-4 py-2 outline-none'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='py-2'>Email</label>
                    <input type="email" className='border rounded px-4 py-2 outline-none'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='py-2'>Password</label>
                    <input type="password" className='border rounded px-4 py-2 outline-none'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='py-2'>Confirm Password</label>
                    <input type="password" className='border rounded px-4 py-2 outline-none'/>
                </div>
                <button className='text-white bg-[#64a98b] px-4 py-2 rounded mt-2'>Register</button>
            </form>
            <p className='pt-6'>Already have an account? <Link to="/patients/login" className='text-[#64a98b] hover:underline'>Login</Link></p>
        </div>
      </div>
      <div className='flex-1 w-full hidden md:flex'>
        <img src={registerImage} className='w-full h-[100vh] bg-cover bg-center' alt="Background" />
      </div>
    </div>
  )
}

export default PatientRegister