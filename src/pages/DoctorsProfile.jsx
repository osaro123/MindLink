import React from 'react'
import DoctorsSidebar from '../components/DoctorsSidebar'
import { Outlet } from 'react-router-dom'

const DoctorsProfile = () => {
  return (
    <div>
        <DoctorsSidebar/>
        <Outlet/>
    </div>
  )
}

export default DoctorsProfile