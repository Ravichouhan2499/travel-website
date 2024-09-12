import React, { useEffect } from 'react'
import Navbar from './Components/NavbarComponent/navbar'
import Caro from './Components/CaresueolComponenet/Caro'
import About from './Components/AboutComponent/About'
import Booking from './Components/BookingComponent/Booking'
import Destiny from './Components/DestinyComponent/Destiny'
import Feature from './Components/FeatureComponent/Feature'
import Service from './Components/ServiceComponent/Service'
import PackageComponent from './Components/PackageComponent/PackageComponent'
import Footer from './Components/FooterComponent/Footer'
import TeamComponent from './Components/TeamComponent/TeamComponent'
import Testimonial from './Components/TestimonialComponent/Testimonial'
import Blog from './Components/BlogComponent/Blog'
import Home from './Pages/HomeComponent/Home'
import Auth from './Pages/AuthComponent/Auth'
import HomePage from './Pages/HomepageComponent/HomePage'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Registration from './Components/RegistrationComponent/Registration'
import Login from './LoginComponent/Login/Login'
import SignUp from './LoginComponent/SignUp/Sign'
import ProtectedRoute from './Pages/ProtectedRoute'
import PublicRoute from './Pages/publicRoute'




export default function App() {


 
 

  return (<>


    
{window.location.pathname.startsWith('/admin') ? null : <Navbar />}




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
  {/* <Route path='/admin/signUp' element={<SignUp/>}></Route> */}


  <Route element={<ProtectedRoute />}>
          <Route path='/admin/*' element={<Auth />} />
        </Route>

<Route element={<PublicRoute />}>
          <Route path="/admin" element={<Login />} />
        </Route>

        </Routes>


{window.location.pathname.startsWith('/admin') ? null : <Footer />}
  </>
 
  )
}
