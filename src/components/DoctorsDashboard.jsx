import React from 'react'
import { FaSpeakerDeck } from 'react-icons/fa'
import { FaPeopleGroup, FaUserDoctor } from 'react-icons/fa6'

const requests = [
  {
      name: "osaro",
      email: "osaro@gmail.com",
      gender: "male",
  },
  {
      name: "chibu",
      email: "chibu@gmail.com",
      gender: "male",
  },
  {
      name: "paul",
      email: "paul@gmail.com",
      gender: "male",
  },
  {
      name: "samuel",
      email: "samuel@gmail.com",
      gender: "male",
  },
  {
      name: "paula",
      email: "paula@gmail.com",
      gender: "female",
  },
]

const DoctorsDashboard = () => {
  return (
    <div className='pl-[20rem] pt-6'>
      <div className='mx-8'>
            <h3 className='text-[2rem] font-semibold'>Dashboard</h3>
            <div className='mt-8 grid grid-cols-3 gap-8'>
                <div className='bg-[#E7F2EC] px-8 py-8 rounded-md'>
                    <div className='bg-[#D1E8DA] inline-block p-4 rounded-full'>
                        <FaPeopleGroup color='#82C2A6' size={20}/>
                    </div>
                    <h3 className='text-sm text-[#0e1612]'>Number of patients</h3>
                    <p className='text-[2rem] text-[#0e1612] font-semibold'>20</p>
                </div>
                <div className='bg-[#E7F2EC] p-8 rounded-md'>
                    <div className='bg-[#D1E8DA] inline-block p-4 rounded-full'>
                        <FaUserDoctor color='#82C2A6' size={20}/>
                    </div>
                    <h3 className='text-sm'>Number of pending requests</h3>
                    <p className='text-[2rem] font-semibold'>15</p>
                </div>
                <div className='col-span-3'>
                    <h3 className='pb-8 text-[1.2rem] font-medium'>Pending patient requests</h3>
                    <table className='w-full'>
                        <thead className='bg-[#64a98b] text-white'>
                            <tr className='text-left border-b-[1px]'>
                                <th className='p-4'>Name</th>
                                <th className='p-4'>Email</th>
                                <th className='p-4'>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requests.map((request,i) => (
                                <tr key={i} className={` ${i % 2 !== 0 ? 'bg-[#E7F2EC]' : 'bg-white'} border-b-[1px]`}>
                                    <td className='py-4 pr-16 pl-4'>{request.name}</td>
                                    <td className='py-4 pr-16 pl-4'>{request.email}</td>
                                    <td className='py-4 pr-16 pl-4'>{request.gender}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorsDashboard