import {Routes,Route, Navigate} from 'react-router-dom'
import React from 'react'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Shop from '../Pages/Shop'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import ProductDetails from '../Pages/ProductDetails'
import Signup from '../Pages/Signup'
import ProtectedRoute from './ProtectedRoute'
import Success from '../Pages/Success'
import Failed from '../Pages/Failed'


const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to="home"/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='shop/:id' element={<ProductDetails/>}/>
        <Route path='checkout' element={
        <ProtectedRoute>
        <Checkout/>
        </ProtectedRoute>
        }/>
        <Route path='success' element={<Success/>}/>
        <Route path='failed' element={<Failed/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Signup/>}/>
    </Routes>
  )
}

export default Router