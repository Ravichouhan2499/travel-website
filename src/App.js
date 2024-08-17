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
import Login from './Components/LoginComponent/Login'
import Auth from './Pages/AuthComponent/Auth'
import HomePage from './Pages/HomepageComponent/HomePage'


export default function App() {
  return (<>

    
    
<Routes>
  <Route  path='/' element={<Auth/>}></Route>
  <Route path='/admin/*' element={<HomePage/>}></Route>
 
</Routes>

  
  </>
 
  )
}
