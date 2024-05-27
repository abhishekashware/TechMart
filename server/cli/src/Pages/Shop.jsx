import { RiSearch2Line } from '@remixicon/react'
import React, { useEffect, useState } from 'react'
import ProductList from '../Components/UI/ProductList';
import products from '../assets/data/products';
import CommonSection from '../Components/UI/CommonSection';
import InputBox from '../Components/UI/InputBox';

const Shop = () => {
  const [productsData,setProductsData]=useState([]);
  useEffect(()=>{

    setProductsData(products)
  },[]);

  const handleFilter=(e)=>{
    const value=e.target.value;
    if(value=="default"){
      setProductsData(products);
      return;
    }
    const filteredProducts=products.filter(p=>p.category===value);
    setProductsData(filteredProducts);
  }
  const handleSearch=(e)=>{
    const value=e.target.value;
    const filteredProducts=products.filter(p=>p.category.toLowerCase().includes(value.toLowerCase())
    ||
    p.productName.toLowerCase().includes(value.toLowerCase()));
    setProductsData(filteredProducts);
  } 
  return (
    <div className='shop'>
      <CommonSection title="Products"/>
    <div className='shop-inner'>
        <select onChange={handleFilter}>
        <option value="default">Filter By Category</option>
          <option value="wireless">Headphones</option>
          <option value="watch">Watches</option>
          <option value="mobile">Mobiles</option>
        </select>
        <select>
          <option  value="default">Sort By</option>
          <option value="ascending">Price: Low to High</option>
          <option value="descending">Price: High to Low</option>
        </select>
        <InputBox handleSearch={handleSearch} search={true} placeholder="Search........."/>
      </div>
      <div className='flex' style={{padding:'0vw 3vw 0vw 3vw',marginTop:'20px',minHeight:'200px'}}>
        {
          productsData.length==0?(
            <h2>No Products Found</h2>
          ):(
            <ProductList data={productsData}/>
          )
        }
      </div>
    </div>
  )
}

export default Shop