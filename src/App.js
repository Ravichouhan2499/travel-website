import React from 'react'
import TopBar from './Components/TopbarComponent/topBar'
import Navbar from './Components/NavbarComponent/navbar'
import Caro from './Components/CaresueolComponenet/Caro'
import About from './Components/AboutComponent/About'
import Booking from './Components/BookingComponent/Booking'
import Destiny from './Components/DestinyComponent/Destiny'
import Feature from './Components/FeatureComponent/Feature'
import Service from './Components/ServiceComponent/Service'
import PackageComponent from './Components/PackageComponent\'/PackageComponent'
import Footer from './Components/FooterComponent/Footer'
import TeamComponent from './Components/TeamComponent/TeamComponent'
import Testimonial from './Components/TestimonialComponent/Testimonial'
import Blog from './Components/BlogComponent/Blog'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/HomeComponent/Home'
import Registration from './Components/RegistrationComponent/Registration'

export default function App() {
  return (<>
    <TopBar/>
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
