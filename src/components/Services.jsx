import React from 'react'
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"

const services = [
    {
        id: 1,
        img: image1,
        title: "Group Therapy and Support Group",
        description: "Therapy, Counselling, and Coaching"
    },
    {
        id: 2,
        img: image2,
        title: "Anger Management",
        description: "Therapy, Counselling, and Coaching"
    },
    {
        id: 3,
        img: image1,
        title: "Couples and Relationship Therapy",
        description: "Therapy, Counselling, and Coaching"
    },
    {
        id: 4,
        img: image2,
        title: "Employee Assistance Program(EAP)",
        description: "Consultation"
    },
    {
        id: 5,
        img: image1,
        title: "Trauma Focused Therapy",
        description: "Therapy, Counselling, and Coaching"
    },
    {
        id: 6,
        img: image2,
        title: "Resilience Training Course",
        description: "Training"
    },
    {
        id: 7,
        img: image1,
        title: "Therapy(Available 24/7)",
        description: "Therapy, Counselling, and Coaching"
    },
    {
        id: 8,
        img: image2,
        title: "Therapy",
        description: "Therapy, Counselling, and Coaching"
    },
    {
        id: 9,
        img: image1,
        title: "Executive Coaching",
        description: "Consultation"
    },
]

const Services = () => {
  return (
    <div className='sm:px-20 px-8 py-16'>
        <h1 className='text-center my-32 font-bold text-[2rem] '>Our Services</h1>
        <div className='grid md:grid-cols-3 place-items-center gap-[2rem]'>
            {services.map(service => (
                <div key={service.id} className='flex flex-col items-center gap-4'>
                    <img src={service.img} alt="" className='w-[200px] h-[200px] mb-4 rounded-full'/>
                    <h3 className='font-semibold text-md text-center'>{service.title}</h3>
                    <p className='text-sm text-center'>{service.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Services