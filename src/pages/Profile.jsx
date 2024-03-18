import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Profile