const dotenv=require('dotenv');
const express=require('express');
const cors = require('cors');
const app=express();
const path=require('path');
const stripe=require('stripe')(process.env.STRIPE_API_KEY);
const Product=require('./models/Product');
const dbconnect=require('./config/dbconnect');

const startServer=async ()=>{
    try{
    dotenv.config();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    
    await dbconnect(process.env.MONGO_URI);
    
    app.get('/products',async (req,res)=>{
         try{
            const products=await Product.find();
            return res.status(200).json(products);
         }
         catch(e){
            console.log(e);
         }
    })
    
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
            success_url:process.env.STRIPE_SUCCESS_URL || 'https://techmart-3ql6.onrender.com/success',
            cancel_url:process.env.STRIPE_FAILED_URL || 'https://techmart-3ql6.onrender.com/failed' ,
            customer_email:'abhishekashware51@gmail.com'
        })
        console.log(session);
        return res.status(200).json(session)
    }
    
    return res.status(500).json({
        error:'failed'
    })
    });
    
    
    app.use(express.static(path.join(__dirname, 'cli/dist')));
    
    // Serve React application for all other routes
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'cli/dist', 'index.html'));
    });
    
    app.listen(process.env.VITE_PORT || 3000,()=>{
    console.log("started server on port",process.env.VITE_PORT || 3000);
    })
}catch(e){
    console.log(e)
}
}

startServer()
