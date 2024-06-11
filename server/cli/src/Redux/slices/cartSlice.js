import { createSlice } from "@reduxjs/toolkit";

const initialState={
cartItems:[],
totalAmount:0,
totalQuantity:0
};

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem:(state,action)=>{
            const newItem=action.payload;
            const existingItem=state.cartItems.find(i=>i.id===newItem.id);
            state.totalQuantity++;

            if(!existingItem){
                state.cartItems.push({
                    id:newItem.id,
                    productName:newItem.productName,
                    image:newItem.imgUrl,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price
                })
            }
            else{
                existingItem.quantity++;
                existingItem.totalPrice+=existingItem.price;
            }
            state.totalAmount= state.cartItems.reduce((total,item)=>{
               return Number(total) + Number(item.quantity)*Number(item.price)
            },0);
        },
        deleteItem:(state,action)=>{
            const {id,allItems} =action.payload;
            if(allItems){
            state.cartItems=state.cartItems.filter(i=>i.id!=id);
            }else{
            state.cartItems=state.cartItems.filter(i=>{
                if(i.id==id && i.quantity>1){
                    i.quantity=i.quantity-1;
                    i.totalPrice=i.totalPrice-i.price;
                    return true;
                }
                return i.id!=id;
            });
            }
            state.totalAmount= state.cartItems.reduce((total,item)=>{
                return Number(total) + Number(item.quantity)*Number(item.price)
             },0);
             state.totalQuantity= state.cartItems.reduce((total,item)=>total+item.quantity,0);
        },
        clearCart:(state,action)=>{
            state.cartItems=[];
            state.totalAmount=0;
            state.totalQuantity=0;
        }
    }
})


export const cartActions =cartSlice.actions;

export default cartSlice.reducer;