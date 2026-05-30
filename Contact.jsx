import React from 'react'
import './App.css'

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault()

    alert("Message Send Successfully ✅")
  }

  return (
    <div className='contact'>

      <div className='contact_container'>

        <div className='contact_left'>

          <h1 className='contact_heading'>
            Contact <span>Us</span>
          </h1>

          <p className='contact_para'>
            We are always ready to help you with the best car booking
            services. Contact us anytime for luxury rides, affordable
            pricing, and premium customer support.
          </p>

          <div className='contact_details'>
            <p>📍 Pune, Maharashtra, India</p>
            <p>📞 +91 xxxxxxxxxx</p>
            <p>📧 carbooking@gmail.com</p>
            <p>🕒 24/7 Customer Support</p>
          </div>

          <form className='contact_form' onSubmit={handleSubmit}>

            <input 
              type="text" 
              placeholder='Enter Your Name'
            />

            <input 
              type="email" 
              placeholder='Enter Your Email'
            />

            <textarea 
              rows="5"
              placeholder='Enter Your Message'>
            </textarea>

            <button type="submit">Send Message</button>

          </form>

        </div>

      </div>

      <div className='contact_boxes'>

        <div className='box'>
          <h2>Fast Support</h2>
          <p>Quick response for all customer queries.</p>
        </div>

        <div className='box'>
          <h2>Secure Booking</h2>
          <p>Safe and trusted online booking system.</p>
        </div>

        <div className='box'>
          <h2>Premium Cars</h2>
          <p>Luxury and stylish cars for every ride.</p>
        </div>

      </div>

    </div>
  )
}

export default Contact