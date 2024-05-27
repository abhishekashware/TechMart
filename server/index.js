const dotenv=require('dotenv');
const config=dotenv.config();
const express=require('express');
const cors = require('cors');
const app=express();
const path=require('path');
const stripe=require('stripe')(process.env.STRIPE_API_KEY);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'cli/dist')))

app.post('/payment',async (req,res)=>{
const {products}=req.body;
let stripProducts=[];
for(let i=0;i<products.length;i++){
    let p=products[i];
    console.log(p);
    let product=await stripe.products.create({
        name:p.productName
    })
    if(product){
        let price=await stripe.prices.create({
            product:`${product.id}`,
            unit_amount:p.price*100,
            currency:'inr'
        })
        
        if(price.id){
            stripProducts.push({
                price:`${price.id}`,
                quantity:p.quantity
            })
        }
    }
}
if(stripProducts.length==products.length){
    let session=await stripe.checkout.sessions.create({
        line_items:stripProducts,
        mode:'payment',
        success_url:'https://techmartapp.netlify.app/success',
        cancel_url:'https://techmartapp.netlify.app/failed',
        customer_email:'abhishekashware51@gmail.com'
    })
    console.log(session);
    return res.status(200).json(session)
}

return res.status(500).json({
    error:'failed'
})
});

app.listen(process.env.VITE_PORT || 3000,()=>{
console.log("started server");
})