import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[]
};
const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            return {
                products:action.payload
            }
        }
    }
})


export default productSlice.reducer;
export const productActions=productSlice.actions