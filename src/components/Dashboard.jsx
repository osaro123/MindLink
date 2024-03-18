import React from 'react'
import img1 from "../assets/image1.jpg"
import img2 from "../assets/image2.jpg"
import { BsChat, BsHeart } from 'react-icons/bs'

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

const Dashboard = () => {
  return (
    <div className='md:pl-[16rem] mx-auto pt-8 w-[90%]'>
        <h1 className='font-semibold text-[2rem]'>Hi, Osaro Lawani</h1>
        <p>Welcome to MindLink</p>
        {posts.map((post) => (
            <div key={post.id} className='pt-12 max-w-[600px] mx-auto'>
                <div className='border-[1px] border-black '>
                    <div className='p-4 flex gap-4 items-center'>
                        <img src={post.profileImg} alt="" className='w-[50px] h-[50px] rounded-full' />
                        <p className='font-medium'>{post.name}</p>
                    </div>
                    <div>
                        <img src={post.postImg} alt="" className='w-full h-[500px] object-cover'/>
                    </div>
                    <div className='flex items-center gap-4 p-4'>
                        <BsHeart size={22}/>
                        <BsChat size={22}/>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Dashboard