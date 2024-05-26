import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../assets/data/products";
import CommonSection from "../Components/UI/CommonSection";
import ReactStars from "react-rating-stars-component";
import Review from "../Components/UI/Review";
import { useDispatch } from "react-redux";
import {cartActions} from '../Redux/slices/cartSlice'
import { toast } from "react-toastify";
import ReviewInput from "../Components/UI/ReviewInput";

const ProductDetails = () => {
  const [tab,setTab]=useState("desc");
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const dispatch=useDispatch();
  const addItemToCart=()=>{
    dispatch(cartActions.addItem(product))
    toast.success('Product added Successfully')
  }
  return (
    <div className="product-detail">
      <CommonSection title="" />
      <div
        className="flex"
        style={{
          flexWrap: "wrap",
          justifyContent: "flex-start",
          padding: "3vw"
        }}
      >
        <img src={product.imgUrl} className="prod-detail-img" />
        <div
          className="product-title"
          style={{ flex: 1, alignItems: "flex-start", textAlign: "left",paddingLeft:'10vw' }}
        >
          <h2>{product.productName}</h2>
          <div className="flex" style={{justifyContent:'flex-start',marginTop:'10px',gap:'50px',fontWeight:'normal'}}>
            <ReactStars
              count={5}
              value={product.avgRating}
              edit={false}
              size={20}
              isHalf={true}
              activeColor="orange"
            />
            (
             {product.avgRating} Ratings
            )
          </div>
          <div>
            {
              "₹ "+ product.price
            }
          </div>
          <div className="prod-desc">
          {
            product.shortDesc
          }
          </div>
          <button  onClick={(e)=>addItemToCart()}>Add To Cart</button>
        </div>
      </div>
      <div style={{padding:'0px 9vw 10px 9vw'}}>
        <div className="flex" style={{cursor:'pointer',gap:'20px',justifyContent:'flex-start'}}>
          <h4 style={{fontWeight:tab!="desc"?'normal':'bold'}} onClick={()=>setTab("desc")}>Description</h4>
          <h4 style={{fontWeight:tab!="review"?'normal':'bold'}} onClick={()=>setTab("review")}>Reviews ({product.reviews.length})</h4>
        </div>
        <div className="prod-desc" style={{display:'flex',gap:'20px',flexDirection:'column' ,paddingBottom:'80px'}}>
          {
            tab=="desc"?product.description:product.reviews.map((p,index)=>(
              <Review key={index} rating={p.rating} text={p.text}/>
            ))
          }
          {
            tab=="desc"?"":(
              <ReviewInput product={product}/>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
