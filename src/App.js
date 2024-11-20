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
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Registration from './Components/RegistrationComponent/Registration'
import Login from './LoginComponent/Login/Login'
import SignUp from './LoginComponent/SignUp/Sign'
import RoleBasedRoute from './Pages/ProtectedRoute'
import UserDashboard from './userComponent/userDashboard/userDashboard'
import PublicRoute from './Pages/publicRoute'
import Agent from './Pages/AgentComponent/Agent'


export default function App() {

  const location =  useLocation()
  
  useEffect(() => {
    const pathsToReload = ['/admin/dashboard', '/agent/dashboard', '/*'];

    // Check if the current path requires reload and it's not already reloaded
    if (
      pathsToReload.includes(location.pathname) &&
      !window.sessionStorage.getItem(`reloaded-${location.pathname}`)
    ) {
      // Reload the page
      window.location.reload();
      // Mark this path as reloaded in session storage
      window.sessionStorage.setItem(`reloaded-${location.pathname}`, 'true');
    }
  }, [location]);

  return (<>

{window.location.pathname.startsWith('/admin') || 
       window.location.pathname.startsWith('/agent') ? null : <Navbar />}

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


   {/* Auth routes */}
   <Route element = {<PublicRoute/>}>
        <Route path="/admin" element={<Login />} />
        </Route>

        {/* Protected Admin routes */}
        <Route element={<RoleBasedRoute requiredRole="admin" />}>
          <Route path='/admin/*' element={<Auth />} />
        </Route>

        {/* Protected User routes */}
        <Route element={<RoleBasedRoute requiredRole="agent" />}>
          <Route path='/agent/*' element={<Agent />} />
        </Route>


        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>


        {window.location.pathname.startsWith('/admin') || 
       window.location.pathname.startsWith('/agent') ? null : <Footer />}  </>
 
  )
}
