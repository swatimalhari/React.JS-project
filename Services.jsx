import React from 'react'
import './App.css'
import ServicesCard from './ServiceCard.jsx'

import car1 from './assets/car1.jpg'
import car2 from './assets/car2.jpg'
import car3 from './assets/car3.jpg'
import car4 from './assets/car4.avif'
import car5 from './assets/car5.avif'
import car6 from './assets/car6.jpeg'

const Services = () => {
  return (
    <div className='product'>

      <ServicesCard 
        image={car1}
        name="TESLA"
        price="$5.50"
        description="A futuristic electric car with cutting-edge technology and zero emissions."
      />

      <ServicesCard 
        image={car2}
        name="BMW"
        price="$5.50"
        description="A luxury car known for performance, comfort, and sporty driving experience."
      />

      <ServicesCard
        image={car3}
        name="MERCEDES"
        price="$5.50"
        description="A premium vehicle offering elegance, safety, and advanced features."
      />

      <ServicesCard
        image={car4}
        name="LAMBORGHINI"
        price="$5.50"
        description="A high-performance supercar built for speed, power, and style."
      />

      <ServicesCard 
        image={car5}
        name="AUDI"
        price="$5.50"
        description="A modern luxury car combining innovation, design, and smooth performance."
      />

      <ServicesCard
        image={car6}
        name="TESLA_X"
        price="$5.50"
        description="A high-tech electric SUV with falcon-wing doors and powerful acceleration."
      />

    </div>
  )
}

export default Services