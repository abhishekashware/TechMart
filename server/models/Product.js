const mongoose=require('mongoose');

const productSchema=new mongoose.Schema(
    {
        productName:{
            type:String,
            required:true
        },
        imgUrl: {
            type:String,
            required:true
        },
        category: {
            type:String,
            required:true
        },
        price: {
            type:Number,
            required:true
        },
        shortDesc:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        reviews:{
            type:[{
                rating:{
                    type:Number,
                    required:true
                },
                text:{
                    type:String,
                    required:true
                }
            }],
        },
        avgRating: {
            type:Number,
            required:true
        }
      }
)

const Product=new mongoose.model('Product',productSchema)

module.exports=Product;