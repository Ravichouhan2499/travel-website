import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../../Components/NavbarComponent/navbar'
import Footer from '../../Components/FooterComponent/Footer'
import Service from '../../Components/ServiceComponent/Service'
import About from '../../Components/AboutComponent/About'
import Booking from '../../Components/BookingComponent/Booking'
import PackageComponent from '../../Components/PackageComponent\'/PackageComponent'
import Registration from '../../Components/RegistrationComponent/Registration'
import Destiny from '../../Components/DestinyComponent/Destiny'
import Testimonial from '../../Components/TestimonialComponent/Testimonial'
import TeamComponent from '../../Components/TeamComponent/TeamComponent'
import Home from '../HomeComponent/Home'
import Blog from '../../Components/BlogComponent/Blog'
import 'bootstrap'

export default function HomePage() {
  return (
      <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
  <Route path='/service' element={<Service/>}></Route>
  <Route path='/about' element={<About/>}></Route> 
  <Route path='/booking' element={<Booking/>}></Route>
  <Route path='/package' element={<PackageComponent/>}></Route>
  <Route path='/contact' element={<Registration/>}></Route>
  <Route path='/destination' element={<Destiny/>}></Route>
  <Route path='/blog' element={<Blog/>}></Route>
  <Route path='/testimonial' element={<Testimonial/>}></Route>
  <Route path='/team' element={<TeamComponent/>}></Route>

      </Routes>
      <Footer/>
      

      </>
  )
}
