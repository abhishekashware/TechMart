import { RiMailLine, RiMap2Line, RiMapPin2Line, RiPhoneLine, RiUserLocationLine } from '@remixicon/react'
import React from 'react'

const Footer = () => {
  return (
    <div
    className="flex footer"
  >
    
    <div className='flex-column' style={{flexBasis:'200px'}}>
        <b>Multimart</b>
        <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, iusto. Non mollitia excepturi, cum debitis aspernatur earum nobis id necessitatibus?
        </span>
    </div>
    <div className='flex-column' style={{flexBasis:'120px'}}>
        <b>Top Categories</b>
        <span>
            Mobile Phones
        </span>
        <span>
            Headphones
        </span>
    </div>
    <div className='flex-column' style={{flexBasis:'120px'}}>
        <b>Useful Links</b>
        <span>
            Shop
        </span>
        <span>
            Cart
        </span>
        <span>
            Login
        </span>
        <span>
            Privacy Policy
        </span>
    </div>
    <div className='flex-column' style={{flexBasis:'200px'}}>
        <b>Contact</b>
        <span>
           <RiMapPin2Line size={15}/> 134, Shyam Nagar, Indore (MP)
        </span>
        <span>
           <RiPhoneLine size={15}/> +91 9233949420
        </span>
        <span>
           <RiMailLine size={15}/> test.user@gmail.com
        </span>
    </div>
  </div>
  )
}

export default Footer