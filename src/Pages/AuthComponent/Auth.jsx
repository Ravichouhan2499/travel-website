import React from 'react'
import './Auth.css'
import { Route, Routes } from 'react-router-dom'
import Admindashboard from '../../adminComponent/adminDashboard/admindashboard'
import Blog from '../../adminComponent/blog/blog'
import AdminNav from '../../adminComponent/adminNav/adminNav'
import AdPackage from '../../adminComponent/adPackages/adPackages'
import AdService from '../../adminComponent/adService/adServices'
import AdTopDestiny from '../../adminComponent/topDestiny/adtopDestiny'
import ViewPackages from '../../adminComponent/adPackages/viewAdPackages'
import ViewBlog from '../../adminComponent/blog/viewBlog'
import ViewTopDestiny from '../../adminComponent/topDestiny/viewAdDestiny'
import ViewServices from '../../adminComponent/adService/viewAdService'
import EditBlog from '../../adminComponent/blog/editBlog'
import EditPackages from '../../adminComponent/adPackages/editAdPackages'
import EditTopdestiny from '../../adminComponent/topDestiny/editAdDestiny'
import AdFooter from '../../adminComponent/adminFooter/adminFooter'
import EditadServices from '../../adminComponent/adService/editAdService'
import Profile from '../../adminComponent/ProfileComponent/Profile'
// import 'bootstrap/dist/css/bootstrap.min.css'



export default function 
() {
  return (
    <div className='authpage'>

      <AdminNav/>
      
      <Routes>

        <Route path='dashboard' element={<Admindashboard/>}></Route>
        <Route path='blog' element={<Blog/>}></Route>
        <Route path='packages' element={<AdPackage/>}></Route>
        <Route path='service' element={<AdService/>}></Route>
        <Route path='topDestiny' element={<AdTopDestiny/>}></Route>
        <Route path='viewPackages' element={<ViewPackages/>}></Route>
        <Route path='viewBlog' element={<ViewBlog/>}></Route>
        <Route path='viewDestiny' element={<ViewTopDestiny/>}></Route>
        <Route path='viewServices' element={<ViewServices/>}></Route>
        <Route path='editBlog/:id' element={<EditBlog/>}></Route>
        <Route path='editPackages/:id' element={<EditPackages/>}></Route>
        <Route path='editDestiny/:id' element={<EditTopdestiny/>}></Route>
        <Route path='editservices/:id' element={<EditadServices/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>



      </Routes>

      <AdFooter/>

    </div>
  )
}
