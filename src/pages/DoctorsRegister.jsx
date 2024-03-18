import React from 'react'
import registerImage from "../assets/register-image.jpg"
import { Link } from 'react-router-dom'

const DoctorsRegister = () => {
  const handleSubmit = () => {

  }
  return (
    <div className='flex justify-between'>
      <div className='flex-1 pt-4 bg-[#f8fbfa]'>
        {/* <Link to="/" className='pl-8 font-semibold text-[1.5rem]'>Paula</Link> */}
        <div className='md:mx-20 mx-8 '>
            <h1 className='text-[2rem] mb-8 font-semibold'>Register as a doctor</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
              <input type="file" />
              <div className='flex flex-col gap-2'>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id='first-name' className='border p-2 outline-none'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id='last-name' className='border p-2 outline-none'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' className='border p-2 outline-none'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="">Gender</label>
                <div className='flex gap-2'>
                  <div className='flex gap-2'>
                    <input type="radio" id='male'/>
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className='flex gap-2'>
                    <input type="radio" id='female'/>
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                <label htmlFor="dob">DOB</label>
                <input type="date" id='dob' className='border p-[2px]'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="place-of-work">Name of place of work</label>
                <input type="text" id='place-of-work' className='border p-2'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="years-of-exp">Years of experience</label>
                <input type="text" id='years-of-exp' className='border p-2'/>
              </div>
              <div className='flex gap-2'>
                <label htmlFor="area-of-specialization">Area of specialization</label>
                <select name="" id="area-of-specialization" className='border'>
                  <option value=""></option>
                </select>
              </div>
              <div>
                <label htmlFor="upload-cv">Upload CV</label>
                <input type="file" id='upload-cv'/>
              </div>
              <button className='bg-[#64a98b] p-2 text-white'>Request to register</button>
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

export default DoctorsRegister