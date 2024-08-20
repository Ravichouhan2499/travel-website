import React from 'react'
import TopBar from './Components/topbarComponent/topBar'
import Navbar from './Components/navbarComponent/navbar'
import Caro from './Components/caresueolComponenet/caro'
import About from './Components/aboutComponent/about'
import Booking from './Components/bookingComponent/booking'
import Destiny from './Components/destinyComponent/destiny'
import Feature from './Components/featureComponent/feature'
import Service from './Components/serviceComponent/service'
import PackageComponent from './Components/PacakageComponent/packageComponent'
import Footer from './Components/footerComponent/footer'
import TeamComponent from './Components/teamComponent/teamComponent'
import Testimonial from './Components/testimonialComponent/testimonial'
import Blog from './Components/blogComponent/blog'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/HomeComponent/Home'
import Registration from './Components/registrationComponent/registration'
import Login from './Components/loginComponent/login'
import Auth from './Pages/AuthComponent/Auth'
import HomePage from './Pages/HomepageComponent/HomePage'


export default function App() {
  return (<>


    
{window.location.pathname !== '/admin' && <Navbar />}

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
  <Route path='/admin' element={<Auth/>}></Route>

</Routes>

{window.location.pathname !== '/admin' && <Footer />}
  
  </>
 
  )
}
