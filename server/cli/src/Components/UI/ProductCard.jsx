import React from 'react'
import './product.css'
import { RiAddCircleFill } from '@remixicon/react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../Redux/slices/cartSlice'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'

const ProductCard = ({item}) => {
  const dispatch=useDispatch();
  const addItemToCart=()=>{
    dispatch(cartActions.addItem(item))
    toast.success('Product added Successfully')
  }
  return (
    <div className='flex' style={{cursor:'pointer',flexDirection:'column',padding:'20px',alignItems:'flex-start'}}>
       <NavLink to={"/shop/"+item.id}>
        <img src={item.imgUrl} className='product-image'/>
        </NavLink>
        <div  className='flex' style={{flexDirection:'column',alignItems:'flex-start',width:'100%'}}>
            <div className='product-title'>{item.productName}</div>
            <div className='product-type'>{item.category}</div>
            <div className='flex' style={{marginTop:'20px',justifyContent:'space-between',width:'100%'}}>   
            <div className='product-price'>{"₹ "+ item.price}</div>
            <RiAddCircleFill onClick={addItemToCart} className='add-button' size={40}/>
            </div>  
        </div>
    
    </div>
  )
}

export default ProductCard