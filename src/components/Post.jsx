import React, { useState } from 'react'
import img1 from "../assets/image1.jpg"
import img2 from "../assets/image2.jpg"
import { BsChat, BsHeart, BsPlus } from 'react-icons/bs'
import { IoClose, IoCloudUploadOutline } from 'react-icons/io5'

const posts = [
    {
        id: 1,
        name: "Lawani Osaro",
        profileImg: img2,
        postImg: img1
    },
    {
        id: 2,
        name: "Lawani Osaro",
        profileImg: img1,
        postImg: img2
    },
    {
        id: 3,
        name: "Lawani Osaro",
        profileImg: img1,
        postImg: img2
    },
]

const Post = () => {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <div className='md:pl-[16rem] mx-auto pt-8 w-[90%]'>
        <h1 className='font-semibold text-[2rem]'>Hi, Osaro Lawani</h1>
        <p>Welcome to Paula</p>
        <div className='flex h-[70vh] items-center justify-center'>
            <button className='flex items-center bg-[#64a98b] text-white px-4 py-2 gap-[1px] rounded-md' onClick={() => setIsOpen(true)}> <BsPlus size={20}/> Create Post</button>
        </div>
        {isOpen && (
            <div className='absolute top-0 left-0 bg-[#80808080] h-[100vh] w-full'>
                <div className='bg-white max-w-[500px] rounded-md p-4  mx-auto mt-20 relative'>
                    <h1 className='py-4'>Create Post</h1>
                    <div className='flex items-center border h-[300px] justify-center'>
                        <button className='flex items-center bg-[#64a98b] text-white px-4 py-2 gap-2 rounded-md'> <IoCloudUploadOutline /> Upload Photo</button>
                    </div>
                    <textarea name="" id="" cols="20" rows="5" className='w-full border my-4 p-4' placeholder='Add Caption'></textarea>
                    <button className='bg-[#64a98b] text-white px-4 py-2 rounded-md'>Post</button>
                    <div className='absolute top-4 right-4'>
                        <IoClose size={20} className='cursor-pointer' onClick={() => setIsOpen(false)}/>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Post