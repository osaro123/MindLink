import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div>
        <AdminSidebar/>
        <Outlet/>
    </div>
  )
}

export default AdminDashboard