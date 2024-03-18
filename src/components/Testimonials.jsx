import React, { useState } from 'react';
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import {IoMdArrowRoundForward,IoMdArrowRoundBack} from "react-icons/io"

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      author: "John Doe",
      workplace: "XYZ Company",
      img: image1,
      testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      author: "Jane Smith",
      workplace: "ABC Corporation",
      img: image2,
      testimonial: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      id: 3,
      author: "Bob Johnson",
      workplace: "123 Industries",
      img: image1,
      testimonial: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1));
  };

  setTimeout(() => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  },5000)

  return (
    <div className='my-32 py-32 bg-[#f8fbfa]'>
      <div className='mx-16'>
        <h2 className='text-[2rem] font-bold md:mb-32 mb-16'>What our clients say</h2>
        <div className='flex items-center justify-between'>
            <div className='md:block hidden'>
                <button onClick={() => handlePrevious} className='bg-[#D1E8DA] text-[#82C2A6] p-2 rounded-full'><IoMdArrowRoundBack size={20}/></button>
            </div>
            <div key={testimonials[currentIndex].id} className='flex md:flex-row flex-col gap-[4rem] items-center max-w-[900px]'>
            <div className='w-full'>
                <img src={testimonials[currentIndex].img}  className='md:w-[300px] w-[250px] md:h-[300px] h-[250px] rounded-full object-cover'/>
            </div>
            <div>
                <div className='mb-12'>
                    <h3 className='text-[1.4rem] font-semibold'>{testimonials[currentIndex].testimonial}</h3>
                </div>
                <div className='pt-12'>
                    <p className='font-semibold'>{testimonials[currentIndex].author}</p>
                    <p>{testimonials[currentIndex].workplace}</p>
                </div>
            </div>
            </div>
            <div className='md:block hidden'>
                <button onClick={() => handleNext} className='bg-[#D1E8DA] text-[#82C2A6] p-2 rounded-full'><IoMdArrowRoundForward size={20}/></button>
            </div>
        </div>
      </div>  
    </div>
  );
};

export default Testimonials;
