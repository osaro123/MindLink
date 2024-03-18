import React from 'react'
import { FaHome } from 'react-icons/fa'
import { FaCodeCommit, FaPerson, FaUserDoctor } from 'react-icons/fa6'
import { RiMentalHealthFill } from 'react-icons/ri'
import { MdLogout } from "react-icons/md";
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <div className='w-[20%] fixed left-0 bg-[#64a98b] text-white h-[100vh] p-8 hidden md:block'>
        <h1 className='font-semibold text-[1.5rem]'>MindLink</h1>
        <ul className='pt-16 flex flex-col gap-12'>
            <li>
                <NavLink to="/admin/dashboard/home" className="flex items-center gap-4"> <FaHome/> Home</NavLink>
            </li>
            <li>
                <NavLink to="/admin/dashboard/viewDoctors" className="flex items-center gap-4"> <FaUserDoctor /> View Doctors</NavLink>
            </li>
            <li>
                <NavLink to="/admin/dashboard/viewPatients" className="flex items-center gap-4"> <FaPerson/> View Patients</NavLink>
            </li>
            <li>
                <NavLink to="/admin/dashboard/doctorsRequest" className="flex items-center gap-4"> <RiMentalHealthFill /> Doctor requests</NavLink>
            </li>
            <li>
                <NavLink to="/admin/dashboard/viewComplaints" className="flex items-center gap-4"> <FaCodeCommit /> View Complaints</NavLink>
            </li>
            <li>
                <NavLink to="/admin/dashboard/logout" className="flex items-center gap-4"> <MdLogout /> Logout</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default AdminSidebar