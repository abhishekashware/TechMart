import React from 'react'
import ProductCard from './ProductCard'
const ProductList = ({data}) => {
  return (
    <div className='flex' style={{gap:'30px'}}>
        {
            data?.map((d,i)=>(
                <ProductCard key={i} item={d}/>
            ))
        }
    </div>
  )
}

export default ProductList