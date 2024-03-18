import React from 'react'

const requests = [
    {
        name: "osaro",
        email: "osaro@gmail.com",
        gender: "male",
        workPlace: "Google"
    },
    {
        name: "osaro",
        email: "osaro@gmail.com",
        gender: "male",
        workPlace: "Google"
    },
    {
        name: "osaro",
        email: "osaro@gmail.com",
        gender: "male",
        workPlace: "Google"
    },
]

const DoctorsRequest = () => {
  return (
    <div className='pl-[20rem] pt-8 mx-8'>
        <h3 className='pb-16 text-[2rem] font-semibold'>Doctors Requests</h3>
        <table className='w-full'>
            <thead className='bg-[#64a98b] text-white'>
                <tr className='text-left border-b-[1px]'>
                    <th className='p-4 '>Name</th>
                    <th className='p-4 '>Email</th>
                    <th className='p-4 '>Gender</th>
                    <th className='p-4 '>Place of work</th>
                </tr>
            </thead>
            <tbody>
                {requests.map((request,i) => (
                    <tr key={i} className={` ${i % 2 !== 0 ? 'bg-[#E7F2EC]' : 'bg-white'} border-b-[1px]`}>
                        <td className='py-4 pr-16 pl-4'>{request.name}</td>
                        <td className='py-4 pr-16 pl-4'>{request.email}</td>
                        <td className='py-4 pr-16 pl-4'>{request.gender}</td>
                        <td className='py-4 pr-16 pl-4'>{request.workPlace}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default DoctorsRequest