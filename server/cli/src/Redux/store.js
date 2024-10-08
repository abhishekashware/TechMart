import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice'
import productSlice from './slices/productSlice';

const store=configureStore({
    reducer:{
        products:productSlice,
        cart:cartSlice,
    }
})

export default store;