import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { Toaster, toast } from 'sonner'
import Calendar from './Calendar'
import { BsPlus } from 'react-icons/bs'
import img1 from "../assets/image1.jpg"

const PatientRequest = () => {
  const [reportModal,setReportModal] = useState(false)
  const [patientDetailsModal,setPatientDetailsModal] = useState(false)
  const [calendarModal,setCalendarModal] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [reportMsg,setReportMsg] = useState("")
  const submitReport = () => {
    if(reportMsg){
      toast.success("Report successfully sent")
      setReportModal(false)
      setReportMsg("")
    }else if(reportMsg === ""){
      toast.error("Enter a report message")
    }
  }
  return (
    <div className='pl-[20rem] pt-6'>
      <Toaster richColors position='top-right'/>
      <h3 className='text-[2rem] font-semibold'>Patient Request</h3>
      <div className='grid grid-cols-3'>
        <div className='pt-4 flex gap-4 w-[350px] h-[350px] shadow-xl mt-24 flex flex-col border'>
          <img src={img1} className='w-[150px] h-[150px] mx-auto rounded-full' />
          <h3 className='text-center py-2 text-[24px] font-medium'>Luna Bamidele</h3>
          <div className='flex gap-2 mx-4'>
            <button className='bg-[#64a98b] text-white px-4 py-2 gap-2 rounded-md text-sm' onClick={() => setShowCalendar(true)}>Schedule Date</button>
            <button className='bg-[#64a98b] text-white px-4 py-2 gap-2 rounded-md text-sm' onClick={() => setPatientDetailsModal(true)}>View Details</button>
            <button className='bg-[#64a98b] text-white px-4 py-2 gap-2 rounded-md text-sm' onClick={() => setReportModal(true)}>Report User</button>
          </div>
        </div>
        <div className='pt-4 flex gap-4 w-[350px] h-[350px] shadow-xl mt-24 flex flex-col border'>
          <img src={img1} className='w-[150px] h-[150px] mx-auto rounded-full' />
          <h3 className='text-center py-2 text-[24px] font-medium'>Luna Bamidele</h3>
          <div className='flex gap-2 mx-4'>
            <button className='bg-[#64a98b] text-white px-4 py-2 gap-2 rounded-md text-sm' onClick={() => setShowCalendar(true)}>Schedule Date</button>
            <button className='bg-[#64a98b] text-white px-4 py-2 gap-2 rounded-md text-sm' onClick={() => setPatientDetailsModal(true)}>View Details</button>
            <button className='bg-[#64a98b] text-white px-4 py-2 gap-2 rounded-md text-sm' onClick={() => setReportModal(true)}>Report User</button>
          </div>
        </div>
        <div className='pt-4 flex gap-4 w-[350px] h-[350px] shadow-xl mt-24 flex flex-col border'>
          <img src={img1} className='w-[150px] h-[150px] mx-auto rounded-full' />
          <h3 className='text-center py-2 text-[24px] font-medium'>Luna Bamidele</h3>
          <div className='flex gap-2 mx-4'>
            <button className='bg-[#64a98b] text-white px-4 py-2 gap-2 rounded-md text-sm' onClick={() => setShowCalendar(true)}>Schedule Date</button>
            <button className='bg-[#64a98b] text-white px-4 py-2 gap-2 rounded-md text-sm' onClick={() => setPatientDetailsModal(true)}>View Details</button>
            <button className='bg-[#64a98b] text-white px-4 py-2 gap-2 rounded-md text-sm' onClick={() => setReportModal(true)}>Report User</button>
          </div>
        </div>
        <div className='pt-4 flex gap-4 w-[350px] h-[350px] shadow-xl mt-24 flex flex-col border'>
          <img src={img1} className='w-[150px] h-[150px] mx-auto rounded-full' />
          <h3 className='text-center py-2 text-[24px] font-medium'>Luna Bamidele</h3>
          <div className='flex gap-2 mx-4'>
            <button className='bg-[#64a98b] text-white px-4 py-2 gap-2 rounded-md text-sm' onClick={() => setShowCalendar(true)}>Schedule Date</button>
            <button className='bg-[#64a98b] text-white px-4 py-2 gap-2 rounded-md text-sm' onClick={() => setPatientDetailsModal(true)}>View Details</button>
            <button className='bg-[#64a98b] text-white px-4 py-2 gap-2 rounded-md text-sm' onClick={() => setReportModal(true)}>Report User</button>
          </div>
        </div>
      </div>
      {reportModal && (
        <div className='absolute top-0 left-0 bg-[#80808080] h-[100vh] w-full'>
          <div className='bg-white max-w-[500px] rounded-md p-4  mx-auto mt-40 relative'>
            <h3 className='pb-2'>Report User</h3>
            <textarea name="" id="" cols="30" rows="10" className='w-full p-4 my-2 outline-none border' placeholder='Enter Complain' value={reportMsg} onChange={(e) => setReportMsg(e.target.value)}/>
            <button className={`bg-[#64a98b] text-white px-4 py-2 gap-2 rounded-md`}  onClick={() => submitReport()}>Send</button>
            <IoClose className='absolute top-4 right-4 cursor-pointer' size={20} onClick={() => setReportModal(false)}/>
          </div>
        </div>
      )}
      {patientDetailsModal && (
        <div className='absolute top-0 left-0 bg-[#80808080] h-[100vh] w-full'>
          <div className='bg-white max-w-[500px] rounded-md px-8 py-4 mx-auto mt-40 relative'>
            <h3 className='pb-6 font-semibold'>Patient Details</h3>
            <p className='pb-2'> <span className='font-medium'>FirstName :</span> Luna</p>
            <p className='pb-2'> <span className='font-medium'>LastName :</span> Bamidele</p>
            <p className='pb-2'> <span className='font-medium'>Gender :</span> Female</p>
            <p className='pb-2'> <span className='font-medium'>Email :</span> lunabamidele@gmail.com</p>
            <p className='pb-2'> <span className='font-medium'>Date of birth :</span> 03-04-08</p>
            <IoClose className='absolute top-4 right-4 cursor-pointer' size={20} onClick={() => setPatientDetailsModal(false)}/>
          </div>
        </div>
      )}
      {showCalendar && (
        <div className='py-6 mt-16'>
          <button className='flex items-center gap-2 bg-[#64a98b] text-white px-4 py-2 gap-2 rounded-md' onClick={() => setCalendarModal(true)}> <BsPlus size={20}/> Add event</button>
          <Calendar/>
        </div>
      )}
      {calendarModal && (
        <div className='absolute top-0 left-0 bg-[#80808080] h-[100vh] w-full z-1'>
          <div className='bg-white max-w-[500px] rounded-md px-8 py-4 mx-auto mt-40 relative'>
            <h3>Add event</h3>
            <form action="" className='pt-4'>
              <div className='flex flex-col'>
                <label htmlFor="">Title</label>
                <input type="text" className='border p-2 my-2 outline-none' />
              </div>
              <button className='bg-[#64a98b] text-white px-4 py-2 gap-2 rounded-md'>Add</button>
            </form>
            <IoClose className='absolute top-4 right-4 cursor-pointer' size={20} onClick={() => setCalendarModal(false)}/>
          </div>
        </div>
      )}
    </div>
  )
}

export default PatientRequest