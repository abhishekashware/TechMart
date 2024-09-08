const mongoose=require('mongoose');

const dbconnect=async (mongoURI)=>{
    try{
    await mongoose.connect(mongoURI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("Connected");
    
}catch(e){
    console.log(e);
    process.exit(1);
}
}

module.exports=dbconnect;