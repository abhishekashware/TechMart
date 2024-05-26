import React, { useState } from "react";
import InputBox from "./InputBox";
import ReactStars from "react-rating-stars-component";

const ReviewInput = ({ product }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleReview = (e) => {
    setReview(e.target.value);
  };
  const handleRating = (e) => {
    setRating(e);
  };
  return (
    <div
      className="flex"
      style={{
        flexDirection: "column",
        gap: "20px",
        alignItems: "flex-start",
        paddingLeft: "10vw",
        color: "black",
        paddingRight:'10vw',
        marginTop:'30px'
      }}
    >
      <h4>Leave your experience</h4>
      <InputBox
        handleSearch={handleName}
        placeholder="Enter Name"
        search={false}
        styl={{width:'100%',padding:'10px 20px',maxWidth:'none'}}
      />
      <div className="flex" style={{ gap: "20px", fontFamily: "sans-serif" }}>
       
          <ReactStars
            count={5}
            onChange={handleRating}
            edit={true}
            size={25}
            isHalf={true}
            activeColor="orange"
          />
          <b>{rating} Rating</b>
      
      </div>
      <InputBox
        search={false}
        handleSearch={handleReview}
        placeholder="Review Message"
        styl={{width:'100%',minHeight:'70px',padding:'10px 20px',maxWidth:'none'}}
      />
      <button style={{marginTop:'10px'}}>Submit</button>
    </div>
  );
};

export default ReviewInput;
