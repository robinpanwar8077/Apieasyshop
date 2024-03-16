const mongoose = require("mongoose");
const { options } = require("../routes/products");



const connectDB = async (url) => {
    try {
        console.log("connecting to the database");
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to the database successfully");
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

module.exports = connectDB;
