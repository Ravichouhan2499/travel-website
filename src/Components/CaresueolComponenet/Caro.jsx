import React from 'react'
import Img1 from '../../Img/varanasi (1).jpg'

import Img2 from '../../Img/caroo2.webp'
import './Caro.css'
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Caro() {

  return (
    <div className='Caro'>
    <Carousel fade id="header-carousel">
      <Carousel.Item>
        <div className="carousel-image-container">
          <img src={Img1} alt="First slide" className='immg' />
        </div>
        <Carousel.Caption className="carousel-caption d-flex flex-column align-items-center justify-content-center">
          <div className="p-3 text-center">
            <h5 className="text-white text-uppercase mb-3">AVANTIKA &amp; VACATIONS</h5>
            <h1 className="display-4 text-white mb-md-4 ">Let's Discover <br/> The World Together </h1>
            <Link to="/contact" className="btn btn-primary py-2 px-4 me-3 animated slideInLeft">Book now</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img src={Img2} alt="Second slide" />
        </div>
        <Carousel.Caption className="carousel-caption d-flex flex-column align-items-center justify-content-center">
        <div className="p-3 text-center">
            <h5 className="text-white text-uppercase mb-3 ">AVANTIKA &amp; VACATIONS</h5>
            <h1 className="display-4 text-white mb-md-4 ">Let's Discover The World Together </h1>
            <Link to="/contact" className="btn btn-primary py-2 px-4 me-3 animated slideInLeft">Book now</Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>

  )
}
