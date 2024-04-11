require("dotenv").config();
const connectDB=require("./db/conntect")
const Product=require("./models/products")
const Productjson= require("./product.json")
const start =async ()=>{
    try{
        await connectDB(process.env.MONGODB_URL)
        console.log("suceess")
        await Product.deleteMany();
        console.log("suceess delete")
        await Product.create(Productjson)
        console.log("suceess data")

    }catch(error){

    }
}


start()