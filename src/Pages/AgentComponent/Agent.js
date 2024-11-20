import React from 'react'
import UserNav from '../../userComponent/userNavBar/userNav'
import AdGroup from '../../userComponent/tourComponent/addTour'
import ViewGroups from '../../userComponent/tourComponent/viewTourDetails'
import EditGroupDetails from '../../userComponent/tourComponent/editToursDetails'
import { Route, Routes } from 'react-router-dom'
import UserFooter from '../../userComponent/userFooter/userFooter'
import AgentDashboard from '../../userComponent/userDashboard/userDashboard'

export default function Agent() {
  return (
    <div>
        <UserNav/>
  <Routes>
  <Route path="/dashboard" element={<AgentDashboard />}></Route>
  <Route path="/addTour" element={<AdGroup />}></Route>
  <Route path="/viewTour" element={<ViewGroups />}></Route>
  <Route path="/editTour/:id" element={<EditGroupDetails />}></Route>


  </Routes>
   <UserFooter/>
    </div>
  )
}
