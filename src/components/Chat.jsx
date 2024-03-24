import React from 'react'
import { BsSend } from 'react-icons/bs'
import img1 from "../assets/image1.jpg"
import img2 from "../assets/image2.jpg"

const Chat = () => {
  return (
    <div className='absolute right-0 md:w-[77%] w-[90%] mx-4 my-4'>
      <div className='p-2 w-full border-b-[1px]'>
        <h3 className='font-semibold text-[1.2rem]'>Chat</h3>
      </div>
      <div className='pt-6'>
        <div className='flex gap-2 items-center'>
          <img src={img1} alt="" className='w-[30px] h-[30px] rounded-full' />
          <div className='px-4 py-2 rounded-md bg-[#E7F2EC] flex flex-col'>
            <p className=''>Hi! how was your day</p>
            
          </div>
        </div>
      </div>
      <div className='absolute right-4 pt-8'>
        <div className='flex gap-2 items-center'>
          <img src={img2} alt="" className='w-[30px] h-[30px] rounded-full' />
          <p className='py-2 px-4 rounded-md bg-[#E7F2EC]'>It was good.</p>
        </div>
      </div>
      <div className='fixed bottom-0 py-4 w-full flex gap-2 items-center'> 
        <input type="text" className='border w-[73%] p-4 rounded-md' placeholder='Enter Message'/>
        <button className='bg-[#64A98B] p-4 rounded-md text-white'><BsSend size={22}/></button>
      </div>
    </div>
  )
}

export default Chat