import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsJournals,BsChat } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineLocalPostOffice, MdSpaceDashboard } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className='w-[20%] fixed left-0 bg-[#64a98b] text-white h-[100vh] p-8 hidden md:block'>
        <h1 className='font-semibold text-[1.5rem]'>MindLink</h1>
        <ul className='pt-16 flex flex-col gap-12'>
            <li>
                <NavLink to="/profile/dashboard" className="flex items-center gap-4"> <MdSpaceDashboard /> Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/profile/journals" className="flex items-center gap-4"> <BsJournals/> Journals</NavLink>
            </li>
            <li>
                <NavLink to="/profile/doctors" className="flex items-center gap-4"><FaUserDoctor /> Doctors</NavLink>
            </li>
            <li>
                <NavLink to="/profile/chat" className="flex items-center gap-4"><BsChat /> Chat</NavLink>
            </li>
            <li>
                <NavLink to="/profile/post" className="flex items-center gap-4"><MdOutlineLocalPostOffice/> Post</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar