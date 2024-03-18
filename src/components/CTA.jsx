import React from 'react'

const CTA = () => {
  return (
    <div className='sm:px-20 px-8 py-16 flex items-center justify-center flex-col md:mx-16 mx-4 my-8 rounded-xl bg-[#E7F2EC]'>
        <h2 className="text-2xl font-semibold mb-4 text-center">Take the First Step Towards Mental Wellness</h2>
        <p className="mb-6 text-center">
          Your mental health matters. Start your journey to a healthier and happier life by connecting with our experienced professionals and supportive community. Take the first step today.
        </p>
        <button className="bg-[#64a98b] text-[#fff] px-6 py-3 rounded-full hover:bg-opacity-90 hover:text-white transition duration-300">
          Get Started
        </button>
    </div>
  )
}

export default CTA