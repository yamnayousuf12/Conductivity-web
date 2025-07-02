import React from 'react'
import Hero from './Hero'
// import Promo from './promo'
// Update the import path below to the correct relative path if needed
// import Testimonial from '../testimonials/page'
import Promo from './promo'
import Testimonial from '../../app/testimonials/page'




const Home = () => {
  return (
    <div>
        <Hero/>
        
        <Promo/>
        <Testimonial/>
      
        
    </div>

  )
}

export default Home