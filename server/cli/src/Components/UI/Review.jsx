import React from 'react'

const Review = ({rating,text}) => {
  return (
    <div>
        <div className='review-rating'>{rating} (Rating)</div>
        <div>{text}</div>
    </div>
  )
}

export default Review