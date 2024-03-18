import React from 'react'
import { FaDesktop, FaLock, FaUserMd, FaUsers } from "react-icons/fa"

const features = [
    {
      id: 1,
      title: "Personalized Consultations",
      description: "Connect with experienced mental health professionals through live chat or video conferencing for personalized consultations tailored to your needs.",
      icon: <FaUserMd />,
    },
    {
      id: 2,
      title: "Community Support",
      description: "Join a compassionate community where patients can share their experiences, offer motivation, and find support from others going through similar challenges.",
      icon: <FaUsers />,
    },
    {
      id: 3,
      title: "Safe and Confidential",
      description: "Rest assured, our platform prioritizes your privacy. All interactions with medical experts and community members take place in a secure and confidential environment.",
      icon: <FaLock />,
    },
    {
      id: 4,
      title: "User-Friendly Interface",
      description: "Our intuitive interface makes it easy to navigate the platform. Sign up, choose a medical expert, and start your journey to mental well-being in just a few clicks.",
      icon: <FaDesktop />,
    },
  ];

const Features = () => {
  return (
    <section className='sm:px-20 px-8 py-16'>
        <h2 className='text-[2rem] pb-8 font-bold'>Features</h2>
        <div className='grid md:grid-cols-3 gap-4'>
            {features.map(feature => (
                <div key={feature.id} className={`${feature.id === 1 || feature.id === 4 ? "md:col-span-2" : ""} bg-[#E7F2EC] p-8 rounded-xl`}>
                    <p className="my-4 text-[#82C2A6] text-2xl bg-[#D1E8DA] rounded-full p-4 inline-block">{feature.icon}</p>
                    <h3 className='text-[1.4rem] font-semibold text-[#0e1612] py-2'>{feature.title}</h3>
                    <p className='text-[.9rem] font-normal text-[#0e1612]'>{feature.description}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Features