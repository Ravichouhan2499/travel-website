import React from 'react'
import TopBar from '../../Components/TopbarComponent/topBar'
import Navbar from '../../Components/NavbarComponent/navbar'
import Caro from '../../Components/CaresueolComponenet/Caro'
import About from '../../Components/AboutComponent/About'
import Booking from '../../Components/BookingComponent/Booking'
import Feature from '../../Components/FeatureComponent/Feature'
import Destiny from '../../Components/DestinyComponent/Destiny'
import Service from '../../Components/ServiceComponent/Service'
import Registration from '../../Components/RegistrationComponent/Registration'
import Testimonial from '../../Components/TestimonialComponent/Testimonial'
import Blog from '../../Components/BlogComponent/Blog'
import PackageComponent from '../../Components/PackageComponent\'/PackageComponent'

export default function Home() {
  return (<>
  
 
  <Caro/>
  <Service/>
  <Destiny/>
  <Blog/>
  <PackageComponent/>
  <About/>
  <Registration/>
  
  </>
    
  )
}
