require("dotenv").config();
const express = require("express");
const app = express();
const connectDB=require("./db/conntect")
const PORT = process.env.PORT || 5000;
const products_routes=require("./routes/products")
app.get("/", (req, res) => {
    res.send("hi");
});
app.use("/api/products",products_routes);
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} yes i am contect`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
