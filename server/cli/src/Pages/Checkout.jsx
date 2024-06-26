import React, { useState } from 'react'
import CommonSection from '../Components/UI/CommonSection'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js';
import ReactLoading from 'react-loading';

const Checkout = () => {
  const totalQuantity=useSelector(s=>s.cart.totalQuantity);
  const totalAmount=useSelector(s=>s.cart.totalAmount);
  const cartItems=useSelector(s=>s.cart.cartItems);
  const {register,handleSubmit}=useForm();
  const [loading,setLoading]=useState(false);
  const checkout=async ()=>{
    setLoading(true);
    try{
      const stripe = await loadStripe("pk_test_51PKeIPSIdOvrZBUz13KnDTOauREmm2OugQ0YCLERxQBAYXcPmztwgzicfGdc7fFa4P63vkllhNSPuVRWw1cmjQJZ00AEKJF1yq");
      const body={
        products:cartItems
      }
      const headers={
        "Content-Type":"application/json"
      }
      const response= await fetch(`/payment`,{
        method:"POST",
        headers,
        body:JSON.stringify(body)
      })
      const session=await response.json();
      const result=await stripe.redirectToCheckout({
        sessionId:session.id
      })
      if(result.error){
      console.log(result.error);
      }
    }
    catch(e){
      console.log(e);
    }
    setLoading(false);
  }
  return (
    <form onSubmit={handleSubmit(checkout)}>
      <CommonSection title="Checkout"/>
      <div style={{padding:'40px 3vw',display:'flex',flexWrap:'wrap',gap:'10px',justifyContent:'center'}}>
      <div className='billing-inf'>
        <h4>Billing Information</h4>
        <input type="text" id="name" placeholder='Enter your name' {...register("name")} />
        <input type="text" id="email" placeholder='Enter your email' {...register("email")} />
        <input type="text" id="phone" placeholder='Phone Number' {...register("phone")} />
        <input type="text" id="streetaddress" placeholder='Street Address' {...register("streetaddress")} />
        <input type="text" id="city" placeholder='City' {...register("city")} />
        <input type="text" id="postalcode" placeholder='Postal Code' {...register("postalcode")} />
        <input type="text" id="country" placeholder='Country' {...register("country")} />

      </div>
      <div className='checkout-card'>
        <div className='row'>
          <div>Total Qty:</div>
          <div>{totalQuantity} items</div>
        </div>
        <div className='row'>
          <div>Subtotal:</div>
          <div>₹{totalAmount}</div>
        </div>
        <div className='row'>
          <div>
            <div>Shipping:</div>
            <div>free shipping</div>
            </div>
          <div>₹0</div>
        </div>
        <hr style={{height:'0.1px solid black'}} color='gray'/>
        <h3 className='row'>
          <div>Total Cost:</div>
          <div>₹{totalAmount}</div>
        </h3>
        <div style={{display:'flex',justifyContent:'center'}}>
        {
          loading?(  <ReactLoading type='spin' color='white' height={50} width={50} />):
        <button type="submit">Place an order</button>
        }
        </div>
      </div>
      </div>
    </form>
  )
}

export default Checkout