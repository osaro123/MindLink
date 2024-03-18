import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import loginImage from "../assets/login-image.jpg"

const AdminLogin = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const submitHandler = async (e) => {
        e.preventDefault()
    }
  return (
    <div className='flex justify-between'>
      <div className='flex-1 pt-4 bg-[#f8fbfa]'>
        <Link to="/" className='pl-8 font-semibold text-[1.5rem]'>MindLink</Link>
        <div className='mt-[10rem] md:mx-20 mx-8 '>
          <h1 className='text-[2rem] pb-8 font-semibold'>Login</h1>
          <form onSubmit={submitHandler} className='flex flex-col gap-[1rem]'>
            <div className='flex flex-col'>
              <label htmlFor="email" className='py-2'>Email</label>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='border p-2 rounded outline-none w-[100%]'
              />
            </div>
            <div className='flex flex-col'>
              <label htmlFor="password" className='py-2'>Password</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='border p-2 rounded outline-none w-[100%]'
              />
            </div>
            <button className='text-center px-4 py-2 mt-4 bg-[#64a98b] rounded text-white w-[100%]'>Login</button>
          </form>
        </div>
      </div>
      <div className='flex-1 w-full hidden md:flex'>
        <img src={loginImage} className='w-full h-[100vh] bg-cover bg-center' alt="Background" />
      </div>
    </div>
  )
}

export default AdminLogin