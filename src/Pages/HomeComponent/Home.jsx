import React from 'react'
import TopBar from '../../Components/topbarComponent/topBar'
import Navbar from '../../Components/navbarComponent/navbar'
import Caro from '../../Components/caresueolComponenet/caro'
import About from '../../Components/aboutComponent/about'
import Booking from '../../Components/bookingComponent/booking'
import Feature from '../../Components/featureComponent/feature'
import Destiny from '../../Components/destinyComponent/destiny'
import Service from '../../Components/serviceComponent/service'
import Registration from '../../Components/registrationComponent/registration'
import Testimonial from '../../Components/testimonialComponent/testimonial'
import Blog from '../../Components/blogComponent/blog'
import PackageComponent from '../../Components/PacakageComponent/packageComponent'

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
