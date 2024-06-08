import React, { useMemo } from 'react'
import './product.css'
import { RiAddCircleFill,RiIndeterminateCircleFill } from '@remixicon/react'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../../Redux/slices/cartSlice'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'

const ProductCard = ({item}) => {
  const dispatch=useDispatch();
  const cartItems=useSelector(s=>s.cart.cartItems);
   const currentItemCount=useMemo(()=>{
    const items=cartItems.filter(i=>i.id==item.id);
    return items.length>0?items[0].quantity:0;
   },[cartItems]);
  const addItemToCart=()=>{
    dispatch(cartActions.addItem(item))
    toast.success('Product added to cart Successfully')
  }
  const deleteItemFromCart=(id)=>{
    dispatch(cartActions.deleteItem({id,allItems:false}))
    toast.success('Item removed from cart')
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
            <div className='flex' style={{gap:'10px'}}>
            {
            currentItemCount ? (
            <>
            <RiIndeterminateCircleFill onClick={(e)=>deleteItemFromCart(item.id)} className='add-button' size={40}/>
            <b>{currentItemCount}</b>
            </>
            ):''
            }
            <RiAddCircleFill onClick={addItemToCart} className='add-button' size={40}/>
            </div>
            </div>  
        </div>
    
    </div>
  )
}

export default ProductCard