import React from 'react'
import './App.css'
import homecar from './assets/homecar.png'

const Home = () => {
  return (
    <div className='home'>

      <div className='hero_section'>

        <div className='left_section'>
          <h1 className='welcome'>
            Drive Your <span>Dream Car</span> Today!
          </h1>

          <p className='para'>
            Experience luxury, speed, comfort, and premium services
            with our modern car collection. Book your favorite car
            anytime and enjoy your ride with style.
          </p>

          {/* <div className='btns'>
            <button className='book_btn'>Book Now</button>
            <button className='service_btn'>Explore More</button>
          </div> */}

          <div className='ratings'>
            ⭐⭐⭐⭐⭐ <span>5K+ Happy Customers</span>
          </div>
        </div>

        <div className='right_section'>
          <img className='homecar' src={homecar} alt="car" />
        </div>

      </div>

      <div className='features'>

        <div className='feature_box'>
          <h2>Luxury Cars</h2>
          <p>Premium sports and luxury cars available.</p>
        </div>

        <div className='feature_box'>
          <h2>Fast Booking</h2>
          <p>Book your favorite car instantly anytime.</p>
        </div>

        <div className='feature_box'>
          <h2>Affordable Price</h2>
          <p>Best services at affordable prices.</p>
        </div>

      </div>

    </div>
  )
}

export default Home