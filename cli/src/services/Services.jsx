import React from 'react'
import ServicesCard from '../Components/ServicesCard'

const Services = () => {
  return (
    <div className='service-container'>
        <ServicesCard color='wheat' text='Free Shipping' desc='Lorem ipsum dolor, sit amet.'/>
        <ServicesCard color='#d4dfe9' text='Easy Returns' desc='Lorem ipsum dolor, sit amet.'/>
        <ServicesCard color='#d0ff64'  text='Secure Payment' desc='Lorem ipsum dolor, sit amet.'/>
        <ServicesCard color='#ADD8E6' text='Back Guarantee' desc='Lorem ipsum dolor, sit amet.'/>
    </div>

  )
}

export default Services