import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PatientRegister from './pages/PatientRegister.jsx'
import PatientLogin from './pages/PatientLogin.jsx'
import DoctorsLogin from './pages/DoctorsLogin.jsx'
import DoctorsRegister from './pages/DoctorsRegister.jsx'
import About from './pages/About.jsx'
import Dashboard from './components/Dashboard.jsx'
import Post from './components/Post.jsx'
import Chat from './components/Chat.jsx'
import Doctors from './components/Doctors.jsx'
import Journals from './components/Journals.jsx'
import Profile from './pages/Profile.jsx'
import AdminLogin from './pages/AdminLogin.jsx'
import AdminDashboard from './pages/AdminDashboard.jsx'
import DashboardHome from './components/DashboardHome.jsx'
import ViewDoctors from './components/ViewDoctors.jsx'
import ViewPatients from './components/ViewPatients.jsx'
import DoctorsRequest from './components/DoctorsRequest.jsx'
import ViewComplaints from './components/ViewComplaints.jsx'
import DoctorsProfile from './pages/DoctorsProfile.jsx'
import DoctorsDashboard from './components/DoctorsDashboard.jsx'
import PatientRequest from './components/PatientRequest.jsx'
import ScheduleChats from './components/ScheduleChats.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/patients/login",
    element: <PatientLogin/>
  },
  {
    path: "/patients/register",
    element: <PatientRegister/>
  },
  {
    path: "/doctors/login",
    element: <DoctorsLogin/>
  },
  {
    path: "/doctors/register",
    element: <DoctorsRegister/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/profile",
    element: <Profile/>,
    children: [
      {
        path: "/profile/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/profile/post",
        element: <Post/>
      },
      {
        path: "/profile/chat",
        element: <Chat/>
      },
      {
        path: "/profile/doctors",
        element: <Doctors/>
      },
      {
        path: "/profile/journals",
        element: <Journals/>
      }
    ]
  },
  {
    path: "/admin/login",
    element: <AdminLogin/>
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard/>,
    children: [
      {
        path: "/admin/dashboard/home",
        element: <DashboardHome/>
      },
      {
        path: "/admin/dashboard/viewDoctors",
        element: <ViewDoctors/>
      },
      {
        path: "/admin/dashboard/viewPatients",
        element: <ViewPatients/>
      },
      {
        path: "/admin/dashboard/doctorsRequest",
        element: <DoctorsRequest/>
      },
      {
        path: "/admin/dashboard/viewComplaints",
        element: <ViewComplaints/>
      }
    ]
  },
  {
    path: "/doctors",
    element: <DoctorsProfile/>,
    children: [
      {
        path: "/doctors/dashboard",
        element: <DoctorsDashboard/>
      },
      {
        path: "/doctors/patientRequests",
        element: <PatientRequest/>
      },
      {
        path: "/doctors/scheduleChats",
        element: <ScheduleChats/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
