import React from 'react'
import '../services.css'
import { RiTruckLine } from '@remixicon/react'
const ServicesCard = ({color,text,desc}) => {
  return (
    <div className='service-item' style={{backgroundColor:color}}>
        <RiTruckLine size={25} color='white' className='services-icon'/>
        <div>
            <b>{text}</b>
            <div style={{fontSize:'0.8rem'}}>{desc}</div>
        </div>
    </div>
  )
}

export default ServicesCard