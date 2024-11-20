import React from 'react'
import UserFooter from '../userFooter/userFooter'
import UserNav from '../userNavBar/userNav'
// import AgentDashboard from '../../Pages/userComponent/userComponent'
import { Route, Routes } from 'react-router-dom'
import AdGroup from '../tourComponent/addTour'
import ViewGroups from '../tourComponent/viewTourDetails'
import BlogComponent from '../../Pages/userComponent/userComponent'
import './userDashboard.css'

export default function AgentDashboard() {
  return (<>
      <h1>Welcome Agent Dashboard</h1>
          <ViewGroups/>
         <BlogComponent/>          
         </>
  )
}
