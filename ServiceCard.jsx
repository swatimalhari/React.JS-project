import React from 'react'

const ServicesCard = ({ image, name, price, description }) => {
  return (
    <div className='product_box'>

      <img src={image} alt={name} />

      <div className='description'>
        <h2>{name}</h2>
        <p className='price'>{price}</p>
        <p className='para'>{description}</p>

        <button className='btn'>Book Now</button>
      </div>

    </div>
  )
}

export default ServicesCard